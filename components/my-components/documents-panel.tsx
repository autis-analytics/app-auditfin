'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Calendar,
  Download,
  FileText,
  FolderOpen,
  RefreshCw,
  Search,
  Loader2,
} from 'lucide-react'
import { useDocsVisibility } from '@/lib/use-docs-visibility'

type Documento = {
  nome: string
  categoria: string
  conteudo: string
  dataAtualizacao: string
  link: string
  showDownload?: boolean
}

function groupByCategoria(docs: Documento[]) {
  const map = new Map<string, Documento[]>()
  for (const doc of docs) {
    const list = map.get(doc.categoria) || []
    list.push(doc)
    map.set(doc.categoria, list)
  }
  return Array.from(map.entries()).map(([categoria, items]) => ({
    categoria,
    items,
  }))
}

export default function DocumentsPanel() {
  const isVisible = useDocsVisibility()
  const [docs, setDocs] = React.useState<Documento[] | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const isLoading = docs === null && error === null
  const [query, setQuery] = React.useState('')
  const [categoria, setCategoria] = React.useState<string>('todas')
  const [inicio, setInicio] = React.useState('')
  const [fim, setFim] = React.useState('')
  const [ordenacao, setOrdenacao] = React.useState<'desc' | 'asc'>('desc')
  const [refreshing, setRefreshing] = React.useState(false)

  const loadDocs = React.useCallback(() => {
    setRefreshing(true)
    fetch('/documents.json')
      .then((r) => {
        if (!r.ok) throw new Error('Falha ao carregar documentos')
        return r.json()
      })
      .then((json: Documento[]) => {
        setDocs(json)
      })
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : 'Erro desconhecido')
      })
      .finally(() => setRefreshing(false))
  }, [])

  React.useEffect(() => {
    let active = true
    setRefreshing(true)
    fetch('/documents.json')
      .then((r) => {
        if (!r.ok) throw new Error('Falha ao carregar documentos')
        return r.json()
      })
      .then((json: Documento[]) => {
        if (active) setDocs(json)
      })
      .catch((e: unknown) => {
        if (active)
          setError(e instanceof Error ? e.message : 'Erro desconhecido')
      })
      .finally(() => {
        if (active) setRefreshing(false)
      })
    return () => {
      active = false
    }
  }, [])

  const grouped = React.useMemo(() => {
    if (!Array.isArray(docs)) return []

    let list = docs

    if (categoria !== 'todas') {
      list = list.filter((d) => d.categoria === categoria)
    }

    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (d) =>
          d.nome.toLowerCase().includes(q) ||
          d.conteudo.toLowerCase().includes(q) ||
          d.categoria.toLowerCase().includes(q),
      )
    }

    if (inicio || fim) {
      const start = inicio ? new Date(inicio) : null
      const end = fim ? new Date(fim) : null
      list = list.filter((d) => {
        const dt = new Date(d.dataAtualizacao)
        if (start && end) return dt >= start && dt <= end
        if (start) return dt >= start
        if (end) return dt <= end
        return true
      })
    }

    list = list.slice().sort((a, b) => {
      const da = new Date(a.dataAtualizacao).getTime()
      const db = new Date(b.dataAtualizacao).getTime()
      return ordenacao === 'desc' ? db - da : da - db
    })

    return groupByCategoria(list)
  }, [docs, categoria, query, inicio, fim, ordenacao])

  if (!isVisible) return null
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='fixed bottom-4 right-4 z-50 shadow-md hover:shadow-lg'>
          <FolderOpen className='mr-2 h-4 w-4' />
          Documentos
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className='sm:max-w-md p-0'>
        <SheetHeader className='p-4'>
          <div className='flex items-center gap-2'>
            <SheetTitle>Documentos para download</SheetTitle>
            {refreshing ? (
              <Button
                variant='ghost'
                size='sm'
                disabled
                className='inline-flex items-center gap-2'
              >
                <Loader2 className='h-4 w-4 animate-spin' /> Carregando…
              </Button>
            ) : (
              <Button
                variant='ghost'
                size='icon'
                onClick={loadDocs}
                aria-label='Atualizar'
                title='Atualizar lista'
              >
                <RefreshCw className='h-4 w-4' />
              </Button>
            )}
          </div>
        </SheetHeader>
        <Separator />
        <div className='p-4 pt-2 space-y-3'>
          {error && (
            <p className='text-sm text-destructive'>
              Não foi possível carregar os documentos.
            </p>
          )}
          {isLoading && (
            <p className='text-sm text-muted-foreground'>Carregando…</p>
          )}

          {/* Filtros dentro de Card + Accordion único; fechado exibe só a busca */}
          <Card className='p-3 space-y-2'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
              <Input
                placeholder='Buscar por nome, conteúdo ou categoria'
                className='pl-9'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='filtros'>
                <AccordionTrigger className='text-sm'>Filtros</AccordionTrigger>
                <AccordionContent>
                  <div className='grid grid-cols-1 gap-3'>
                    <div className='grid grid-cols-1 gap-2'>
                      <label className='text-xs text-muted-foreground'>
                        Categoria
                      </label>
                      <Select
                        value={categoria}
                        onValueChange={(v) => setCategoria(v)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Categoria' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='todas'>Todas</SelectItem>
                          {Array.from(
                            new Set((docs || []).map((d) => d.categoria)),
                          ).map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className='grid grid-cols-2 gap-2'>
                      <div>
                        <div className='flex items-center gap-2 text-xs text-muted-foreground mb-1'>
                          <Calendar className='h-3.5 w-3.5' /> Início
                        </div>
                        <Input
                          type='date'
                          value={inicio}
                          onChange={(e) => setInicio(e.target.value)}
                        />
                      </div>
                      <div>
                        <div className='flex items-center gap-2 text-xs text-muted-foreground mb-1'>
                          <Calendar className='h-3.5 w-3.5' /> Fim
                        </div>
                        <Input
                          type='date'
                          value={fim}
                          onChange={(e) => setFim(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {(query || categoria !== 'todas' || inicio || fim) && (
              <div className='text-xs text-muted-foreground'>
                Filtros aplicados. Limpe os campos para ver todos.
              </div>
            )}
          </Card>
        </div>
        <ScrollArea className='p-4 pt-0 h-[calc(100%-220px)]'>
          <div className='space-y-4'>
            {grouped.map((group) => (
              <div key={group.categoria}>
                <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2'>
                  {group.categoria}
                </h3>
                <div className='space-y-2'>
                  {group.items.map((doc) => (
                    <Card key={doc.link} className='p-3'>
                      <div className='flex items-start justify-between gap-3'>
                        <div className='min-w-0'>
                          <div className='flex items-center gap-2'>
                            <FileText className='h-4 w-4 text-muted-foreground' />
                            <span className='font-medium truncate'>
                              {doc.nome}
                            </span>
                          </div>
                          <p className='text-sm text-muted-foreground mt-1 line-clamp-2'>
                            {doc.conteudo}
                          </p>
                          <p className='text-xs text-muted-foreground mt-1'>
                            Atualizado em{' '}
                            {new Date(doc.dataAtualizacao).toLocaleDateString(
                              'pt-BR',
                            )}
                          </p>
                        </div>
                        <div className='flex-shrink-0'>
                          {doc.showDownload !== false && (
                            <a href={doc.link} download>
                              <Button
                                variant='outline'
                                size='sm'
                                className='whitespace-nowrap'
                              >
                                <Download className='h-4 w-4 mr-2' />
                                Baixar
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            {!isLoading && !error && grouped.length === 0 && (
              <p className='text-sm text-muted-foreground'>
                Nenhum documento disponível.
              </p>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
