import ContactComponent from '@/components/ContactComponent'
import FullWidthSection from '@/components/FullWidthSection'
import Layout from '@/layouts/Layout'


const Contact = () => {
  return (
    <Layout>
        <FullWidthSection title='Contact' bgColor='purple' color='white'></FullWidthSection>
        <section style={{display:'flex', flexWrap:'wrap', gap:2}}>
            <ContactComponent></ContactComponent>
           
        </section>
    </Layout>
  )
}

export default Contact