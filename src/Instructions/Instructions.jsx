import React from "react";
import { Link } from "react-router-dom";
import "./Instuctions.css"
const Instructions = () => {

    return (
        <div className="Instuctions">
            <div className="InstuctionsDiv">
                <div>
                <h1>Avtomobil g`ildiragini almashtirish</h1>
                <p>Yo'lda ketayotganingizda g'ildirakning ishdan chiqishi yoki g'ildiragining ishdan chiqishidan ko'ra ko'p narsa asabiylashadi. Biroq, avtomobilingizdagi g'ildirakni qanday almashtirishni bilish vaqtingizni, pulingizni tejashingiz va xavfsizligingizni ta'minlashi mumkin.

Avtomobil g'ildiragini almashtirish jarayonini bosqichma-bosqich, g'ildirakni almashtirishning ahamiyati, xavfsizlik choralari va qachon professional yordam so'rash kerakligini bilib oling.</p>
                <Link to={"/instructions/changewheel"}><i>Ko'proq o'qish <span>{">>"}</span></i></Link>
                </div>
                <div className="InstructionsImg">
                <img src="https://www.autozone.com/diy/wp-content/uploads/2023/09/removing-tire-of-jacked-up-car-duralst-sand-in-bg-870x580.jpg" alt="" />
                </div>
            </div>
            <div className="InstuctionsDiv">
                <div>
                <h1>Avtomobil akumulyatorini to`g`rirlash</h1>
                <p>Avtomobil egasining hayoti juda ko'p qiyinchiliklarga duch kelishi mumkin - va afsuski, ko'pchilik avtomobil akkumulyatori bilan bog'liq muammolarga duch keldi.

Agar siz hech qachon kontaktni o'girgan bo'lsangiz yoki transport vositasini ishga tushirishga urinib ko'rgan bo'lsangiz va uni jim kutib olgan bo'lsangiz, unda muammo borligini bilasiz.

Ko'pincha bu tekis yoki o'lik avtomobil akkumulyatori bilan bog'liq. Ushbu qo'llanmada nima qilish kerakligi va yo'lga qanday qaytish kerakligi ko'rib chiqiladi.</p>
                <Link to={"/instructions/changebattery"}><i>Ko'proq o'qish <span>{">>"}</span></i></Link>
                </div>
                <div className="InstructionsImg">
                <img src="https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_2121x1414_0x520_car_battery.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Instructions