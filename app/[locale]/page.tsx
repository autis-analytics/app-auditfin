import ReparationAgreement from './_components/reparation-agreement'
import AuditOfObligations from './_components/audit-of-obligations'
import ValeFinancialAudit from './_components/vale-financial-audit'
import TermsOfUse from './_components/terms-of-use'
import Faq from './_components/faq'

const HomePage = () => {
  return (
    <div className='space-y-32 py-16'>
      <ReparationAgreement/>
      <AuditOfObligations />
      <ValeFinancialAudit />
      <Faq />
      <TermsOfUse />
    </div>
  )
}

export default HomePage
