'use client'
import Layout from './Layout'
import StoreProvider from '../../redux/provider/Provider';

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Layout>
            {children}
          </Layout>
        </StoreProvider>
      </body>
    </html>
  )
}

export default PagesLayout