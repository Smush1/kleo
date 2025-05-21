import amazon from '../images/Amazon.webp'
import indusmela from '../images/Indusmela.webp'


function EcommercePlatform() {
  return (
    <>
  
    {/* <!-- E-commerce Shopping Platform --> */}
    <div className="container store-container">
        <div className="g-3 row">
            {/* <!-- Amazon Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://www.amazon.in/stores/Kleo/page/0310D887-F003-4793-958F-4B6D4FFF6C38?lp_asin=B01DZUJBYW&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto" target="_blank" rel="noreferrer" className="text-decoration-underline">
                    <div className="amazon-box store-box">
                        <span>Also available on</span>
                        <img src={amazon} alt="Amazon" />
                    </div>
                </a>
            </div>

            {/* <!-- Indusmela Button --> */}
            <div className="col-12 col-md-6">
                <a href="https://indusmela.in/collections/kleo" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div className="indusmela-box store-box">
                        <span>Shop from our <br/> one-stop store!</span>
                        <img src={indusmela} alt="IndusMela" />
                    </div>
                </a>
            </div>
        </div>
    </div>

    </>
  )
}

export default EcommercePlatform






