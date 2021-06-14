import { kwdata } from '../kwdata';
const imgPathVal = '/images/';

 const Keywords = ({dt}) => {
    return(
        <div className="container">
            <div className="related-eds-wrap  rlt-edswrap">
                <div className="related-eds-header">Related search topics</div>
                <ul>
                    {
                    kwdata.map((kw) => (
                        <li className={'kw-block kw-'+kw.id} key={kw.id}>
                            <div className="kw-wrap">                        
                                <div className="img_wrap">
                                    <img src={imgPathVal + kw.imgPath} className="dispImg" alt="" />
                                </div>
                                <div className="cont-wrap">
                                    <div className="numberBlock">0{kw.id}</div>
                                    <div className="arrow"></div>
                                    <div className="anchortext"><span>{kw.kw}</span></div>
                                </div>
                            <a href={kw.link} className="anchorhref og_kw track_click" target="_blank" ></a>
                            </div>
                        </li>    
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export async function getStaticProps() {
  return {
   props:{kwdata}
}
}

export default Keywords;