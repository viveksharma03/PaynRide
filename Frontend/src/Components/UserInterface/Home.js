import Header from "./MyComponents/Header"
import SearchComponent from "./SearchComponent"
import FeaturedComponent from "./MyComponents/FeaturedComponent"
import OfferComponent from './MyComponents/OfferComponent'
import WhyComponent from './MyComponents/WhyComponent'
import SanitizedAndSafeComponent from "./MyComponents/SanitizedAndSafeComponent"
import { getData } from "../Services/FetchNodeServices"
import Cities from "./MyComponents/Cities"
import {Faq} from './MyComponents/Faq'
import Ourinvestor from './MyComponents/Ourinvestor'
import {Ourjourney} from './MyComponents/Ourjourney'
import PlayStore from './MyComponents/PlayStore'
import Footer from './MyComponents/Footer'
import { useState, useEffect } from "react"


export default function Home(props) {

    const [features, setFeatures] = useState([])
    const getAllFeature = async () => {
        var result = await getData('user/all_feature')
        setFeatures(result.data)
    }
    useEffect(function () {
        getAllFeature();
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#dfe6e9' }}>
            <Header />
            <div >
                <SearchComponent />

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', paddingTop: '2%' }}>
                    <div style={{ width: '87%' }}>
                        <FeaturedComponent tittle="Featured" images={features} />

                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', marginTop: '2%' }}>
                    <div style={{ width: '87%' }}>
                        <OfferComponent />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', marginTop: '2%' }}>
                    <div style={{ width: '87%' }}>
                        <WhyComponent />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '3%', marginTop: 30 }}>
                    <div style={{ width: '89%' }}>
                        <Cities />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', marginTop: 30 }}>
                    <div style={{ width: '86%' }}>
                        <Faq />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', marginTop: 30 }}>
                    <div style={{ width: '86%' }}>
                        <Ourinvestor/>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', marginTop: 30 }}>
                    <div style={{ width: '86%' }}>
                        <Ourjourney/>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', marginTop: 30 }}>
                    <div style={{ width: '86%' }}>
                        <PlayStore/>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', marginTop: 30 }}>
                    <div style={{ width: '86%' }}>
                        <Footer/>
                    </div>
                </div>

            </div>



        </div>
    )
}