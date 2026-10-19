import ReparationAgreement from './_components/reparation-agreement'
import AuditOfObligations from './_components/audit-of-obligations'
import AnnexI1Audit from './_components/annex-i1-audit'
import ValeFinancialAudit from './_components/vale-financial-audit'
import TermsOfUse from './_components/terms-of-use'
import Faq from './_components/faq'
import PortalIntro from './_components/portal-intro'
import SectionIndex from '@/components/my-components/section-index'

const HomePage = () => {
  return (
    <>
      <PortalIntro />
      <div className='portal-container reading-layout'>
        <SectionIndex />
        <div className='reading-content'>
          <ReparationAgreement />
          <AuditOfObligations />
          <AnnexI1Audit />
          <ValeFinancialAudit />
          <Faq />
          <TermsOfUse />
        </div>
      </div>
    </>
  )
}

export default HomePage
