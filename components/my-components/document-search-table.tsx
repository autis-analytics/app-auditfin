'use client'

import React, { useState } from 'react'
import {
  ChevronRight,
  ChevronDown,
  Download,
  Search,
  Calendar,
  AlertCircle,
  Menu,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Tipos de dados
interface Document {
  id: string
  tipo: string
  numero: string
  descricao?: string
  autor: string
  data: string
}

interface FilterCategory {
  name: string
  items: { label: string; count: number; value: string }[]
}

const DocumentSearchTable = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('10')
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({})
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false)

  // Dados mockados
  const documents: Document[] = [
    {
      id: '1',
      tipo: 'Acordo de Algo',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0049-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '14/11/2024',
    },
    {
      id: '2',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0039-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '08/10/2024',
    },
    {
      id: '3',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0037-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '08/10/2024',
    },
    {
      id: '4',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0036-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '12/09/2024',
    },
    {
      id: '5',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0034-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '12/09/2024',
    },
    {
      id: '6',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0033-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '02/09/2024',
    },
    {
      id: '7',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0027-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '02/08/2024',
    },
    {
      id: '8',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-TN-PM-0008-2024',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '28/05/2024',
    },
    {
      id: '9',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-RP-PM-0018-2025',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '21/07/2025',
    },
    {
      id: '10',
      tipo: 'Acordo de Reparação',
      numero: '60725868-ACM-DM-ZZ-RP-PM-0017-2025',
      descricao:
        'Nota Técnica referente à análise das Informações Complementares para o Teste de Dragagem Mecanizada do Rio Paraopeba.',
      autor: 'ABCD',
      data: '23/06/2025',
    },
  ]

  const filters: FilterCategory[] = [
    {
      name: 'Instrumento Jurídico',
      items: [
        { label: 'Ações Emergenciais', count: 86, value: 'acoes-emergenciais' },
        { label: 'Acordo de Reparação', count: 32, value: 'acordo-reparacao' },
        { label: 'Estudo de Risco', count: 70, value: 'estudo-risco' },
      ],
    },
    {
      name: 'Tema',
      items: [
        { label: 'Água Potável', count: 67, value: 'agua-potavel' },
        { label: 'Água Subterrânea', count: 69, value: 'agua-subterranea' },
        {
          label: 'Comunicação e Relacionamento',
          count: 87,
          value: 'comunicacao',
        },
        { label: 'Dragagem', count: 90, value: 'dragagem' },
      ],
    },
    {
      name: 'Tipo',
      items: [
        { label: 'Nota Técnica', count: 38, value: 'nota-tecnica' },
        { label: 'Relatório', count: 241, value: 'relatorio' },
      ],
    },
    {
      name: 'Autor',
      items: [{ label: 'ABCD', count: 279, value: 'ABCD' }],
    },
  ]

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[category] || []
      if (categoryFilters.includes(value)) {
        return {
          ...prev,
          [category]: categoryFilters.filter((f) => f !== value),
        }
      }
      return {
        ...prev,
        [category]: [...categoryFilters, value],
      }
    })
  }

  const clearFilters = () => {
    setSelectedFilters({})
    setSearchTerm('')
    setStartDate('')
    setEndDate('')
  }

  const toggleRowExpansion = (docId: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(docId)) {
        newSet.delete(docId)
      } else {
        newSet.add(docId)
      }
      return newSet
    })
  }

  // Função para filtrar documentos
  const getFilteredDocuments = () => {
    let filtered = documents

    // Filtro por busca de texto
    if (searchTerm) {
      filtered = filtered.filter(
        (doc) =>
          doc.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.descricao?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.tipo.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtros por categoria
    Object.entries(selectedFilters).forEach(([category, values]) => {
      if (values.length > 0) {
        filtered = filtered.filter((doc) => {
          switch (category) {
            case 'Instrumento Jurídico':
              return values.some((value) => {
                if (value === 'acordo-reparacao')
                  return doc.tipo === 'Acordo de Reparação'
                return false
              })
            case 'Autor':
              return values.some((value) => {
                if (value === 'ABCD') return doc.autor === 'ABCD'
                return false
              })
            default:
              return true
          }
        })
      }
    })

    // Filtro por data
    if (startDate || endDate) {
      filtered = filtered.filter((doc) => {
        const docDate = new Date(doc.data.split('/').reverse().join('-'))
        const start = startDate ? new Date(startDate) : null
        const end = endDate ? new Date(endDate) : null

        if (start && end) {
          return docDate >= start && docDate <= end
        } else if (start) {
          return docDate >= start
        } else if (end) {
          return docDate <= end
        }
        return true
      })
    }

    return filtered
  }

  const filteredDocuments = getFilteredDocuments()
  const totalPages = Math.ceil(
    filteredDocuments.length / parseInt(itemsPerPage),
  )
  const currentDocuments = filteredDocuments.slice(
    (currentPage - 1) * parseInt(itemsPerPage),
    currentPage * parseInt(itemsPerPage),
  )

  // Reset página quando filtros mudam
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedFilters, startDate, endDate])

  // Componente de filtros reutilizável
  const FiltersContent = () => (
    <>
      <div className='mb-4'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='font-semibold text-lg'>Filtros</h3>
          <Button
            variant='link'
            size='sm'
            onClick={clearFilters}
            className='text-primary h-auto p-0'
          >
            Limpar filtros
          </Button>
        </div>

        <Accordion
          type='multiple'
          defaultValue={['Instrumento Jurídico']}
          className='w-full'
        >
          {filters.map((filter) => (
            <AccordionItem value={filter.name} key={filter.name}>
              <AccordionTrigger className='text-sm font-medium'>
                {filter.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className='pt-2'>
                  {filter.items.map((item) => (
                    <label
                      key={item.value}
                      className='flex items-center justify-between py-1.5 px-2 hover:bg-muted cursor-pointer'
                    >
                      <div className='flex items-center gap-2'>
                        <input
                          type='checkbox'
                          className='border-gray-300'
                          checked={
                            selectedFilters[filter.name]?.includes(
                              item.value,
                            ) || false
                          }
                          onChange={() =>
                            handleFilterChange(filter.name, item.value)
                          }
                        />
                        <span className='text-sm'>{item.label}</span>
                      </div>
                      <span className='text-xs text-muted-foreground'>
                        {item.count}
                      </span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Filtros de Data */}
      <Separator className='my-4' />
      <div className='space-y-3'>
        <div>
          <label className='text-sm font-medium mb-1.5 flex items-center gap-2'>
            <Calendar className='h-4 w-4' />
            Data inicial
          </label>
          <Input
            type='date'
            className='w-full'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className='text-sm font-medium mb-1.5 flex items-center gap-2'>
            <Calendar className='h-4 w-4' />
            Data final
          </label>
          <Input
            type='date'
            className='w-full'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
    </>
  )

  return (
    <div className='min-h-screen bg-background'>
      <div className='flex'>
        {/* Sidebar Desktop */}
        <div className='hidden lg:block w-64 border-r bg-muted/10 p-4 h-screen overflow-y-auto'>
          <FiltersContent />
        </div>

        {/* Conteúdo Principal */}
        <div className='flex-1 p-4 lg:p-6 min-w-0'>
          {/* Botão Filtros Mobile e Barra de Busca */}
          <div className='mb-4 lg:mb-6'>
            <div className='flex flex-col sm:flex-row gap-4 mb-4'>
              {/* Botão Filtros Mobile */}
              <Dialog
                open={isFilterDialogOpen}
                onOpenChange={setIsFilterDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant='outline'
                    size='sm'
                    className='lg:hidden flex items-center gap-2 w-fit'
                  >
                    <Menu className='h-4 w-4' />
                    Filtros
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-md max-h-[80vh] overflow-y-auto'>
                  <DialogHeader>
                    <DialogTitle>Filtros</DialogTitle>
                  </DialogHeader>
                  <div className='mt-4'>
                    <FiltersContent />
                  </div>
                </DialogContent>
              </Dialog>

              {/* Barra de Busca */}
              <div className='relative flex-1 lg:max-w-2xl'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
                <Input
                  type='text'
                  placeholder='Busque por palavra chave'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='pl-10 pr-4'
                />
              </div>
            </div>
            <p className='text-sm text-muted-foreground'>
              Última atualização: 04/08/2025
            </p>
          </div>

          {/* Tabela Desktop */}
          <div className='hidden lg:block overflow-x-auto'>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow className='bg-primary hover:bg-primary'>
                    <TableHead className='text-primary-foreground font-semibold w-8'></TableHead>
                    <TableHead className='text-primary-foreground font-semibold'>
                      <div className='flex items-center gap-2'>
                        Instrumento Jurídico
                        <AlertCircle className='h-4 w-4' />
                      </div>
                    </TableHead>
                    <TableHead className='text-primary-foreground font-semibold'>
                      <div className='flex items-center gap-2'>
                        Documento
                        <AlertCircle className='h-4 w-4' />
                      </div>
                    </TableHead>
                    <TableHead className='text-primary-foreground font-semibold'>
                      <div className='flex items-center gap-2'>
                        Autor
                        <AlertCircle className='h-4 w-4' />
                      </div>
                    </TableHead>
                    <TableHead className='text-primary-foreground font-semibold'>
                      <div className='flex items-center gap-2'>
                        Data
                        <AlertCircle className='h-4 w-4' />
                      </div>
                    </TableHead>
                    <TableHead className='text-primary-foreground font-semibold text-right'>
                      Arquivo
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentDocuments.map((doc) => (
                    <React.Fragment key={doc.id}>
                      <TableRow className='hover:bg-muted/50'>
                        <TableCell className='w-8'>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={() => toggleRowExpansion(doc.id)}
                            className='h-6 w-6 p-0'
                          >
                            {expandedRows.has(doc.id) ? (
                              <ChevronDown className='h-4 w-4' />
                            ) : (
                              <ChevronRight className='h-4 w-4' />
                            )}
                          </Button>
                        </TableCell>
                        <TableCell className='font-medium'>
                          {doc.tipo}
                        </TableCell>
                        <TableCell>
                          <p className='font-medium underline text-primary cursor-pointer hover:text-primary/80'>
                            {doc.numero}
                          </p>
                        </TableCell>
                        <TableCell>{doc.autor}</TableCell>
                        <TableCell>{doc.data}</TableCell>
                        <TableCell className='text-right'>
                          <Button
                            variant='ghost'
                            size='sm'
                            className='text-primary hover:text-primary/80'
                          >
                            <Download className='h-4 w-4 mr-2' />
                            Baixar
                          </Button>
                        </TableCell>
                      </TableRow>
                      {expandedRows.has(doc.id) && doc.descricao && (
                        <TableRow>
                          <TableCell colSpan={6} className='bg-muted/30 py-4'>
                            <div className='pl-6'>
                              <p className='text-sm text-muted-foreground'>
                                <span className='font-medium'>Descrição:</span>{' '}
                                {doc.descricao}
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Layout Mobile */}
          <div className='lg:hidden space-y-4 w-full'>
            {currentDocuments.map((doc) => (
              <Card key={doc.id} className='p-4 w-full'>
                <div className='space-y-3'>
                  <div className='flex items-start justify-between gap-2'>
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() => toggleRowExpansion(doc.id)}
                          className='h-6 w-6 p-0 flex-shrink-0'
                        >
                          {expandedRows.has(doc.id) ? (
                            <ChevronDown className='h-4 w-4' />
                          ) : (
                            <ChevronRight className='h-4 w-4' />
                          )}
                        </Button>
                        <span className='text-sm font-medium text-muted-foreground truncate'>
                          {doc.tipo}
                        </span>
                      </div>
                      <p className='font-medium underline text-primary cursor-pointer hover:text-primary/80 text-sm break-all'>
                        {doc.numero}
                      </p>
                    </div>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-primary hover:text-primary/80 flex-shrink-0'
                    >
                      <Download className='h-4 w-4' />
                    </Button>
                  </div>

                  <div className='flex justify-between text-sm text-muted-foreground gap-2'>
                    <span className='truncate'>{doc.autor}</span>
                    <span className='flex-shrink-0'>{doc.data}</span>
                  </div>

                  {expandedRows.has(doc.id) && doc.descricao && (
                    <div className='mt-3 pt-3 border-t'>
                      <p className='text-sm text-muted-foreground'>
                        <span className='font-medium'>Descrição:</span>{' '}
                        {doc.descricao}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Paginação */}
          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between mt-6 gap-4'>
            <p className='text-sm text-muted-foreground'>
              Apresentando{' '}
              {Math.min(
                (currentPage - 1) * parseInt(itemsPerPage) + 1,
                filteredDocuments.length,
              )}
              -
              {Math.min(
                currentPage * parseInt(itemsPerPage),
                filteredDocuments.length,
              )}{' '}
              de {filteredDocuments.length} resultado(s)
            </p>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto'>
              <div className='flex items-center gap-2'>
                <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
                  <SelectTrigger className='w-20'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='10'>10</SelectItem>
                    <SelectItem value='20'>20</SelectItem>
                    <SelectItem value='50'>50</SelectItem>
                  </SelectContent>
                </Select>
                <span className='text-sm text-muted-foreground whitespace-nowrap'>
                  itens por página
                </span>
              </div>
              <div className='flex items-center gap-1 overflow-x-auto'>
                <Button
                  variant={currentPage === 1 ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setCurrentPage(1)}
                  className='h-8 w-8 p-0 flex-shrink-0'
                >
                  1
                </Button>
                <Button
                  variant={currentPage === 2 ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setCurrentPage(2)}
                  className='h-8 w-8 p-0 flex-shrink-0'
                >
                  2
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='h-8 w-10 p-0 flex-shrink-0'
                  disabled
                >
                  ...
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => setCurrentPage(28)}
                  className='h-8 w-8 p-0 flex-shrink-0'
                >
                  28
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    setCurrentPage(Math.min(currentPage + 1, totalPages))
                  }
                  className='h-8 w-8 p-0 flex-shrink-0'
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentSearchTable
