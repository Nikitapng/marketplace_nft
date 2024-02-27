import { CardMP } from "../../components/index"
import MPData from "../../data/MPdata"


const MPSection = () => {
    return(
        <section className="mpsection">
        <div className="mp-flex">
        <div className="mpcards">
        {MPData.map((data, index) => (
                    <CardMP key={index} MPData={data} />
                ))}  
        </div>
        </div>
    </section>
    )
}

export default MPSection