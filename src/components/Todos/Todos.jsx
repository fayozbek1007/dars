import React from 'react';

const Todos = () => {
    const TarkipText = ["O'zbekiston", "Jaxon", "Jamiyat", "Texnalogiya", "Sport", "Namangan Hayoyi", "Siyosat", "Shou-Beznes"]

    return (
        <div className='Midd'>
            <div className='Midd_left'>
                <div className='Midd_left_data'>
                    <div className='Midd_left_data_tark'>
                        <ul className='Midd_left_data_tark_ulli'>
                            <li className='Midd_left_data_tark_ulli_liay'>Shanbva</li>
                            <li className='Midd_left_data_tark_ulli_liay'>27</li>
                            <li className='Midd_left_data_tark_ulli_liay'>Iyul</li>
                        </ul>
                    </div>
                    <div className='Midd_left_data_summa'>
                        <ul className='Midd_left_summa_ulli'>
                            <li className='Midd_left_summa_ulli_liay'>1 USD</li>
                            <li className='Midd_left_summa_ulli_liay'>12634.00</li>
                            <li className='Midd_left_summa_ulli_liay'>8,96</li>
                        </ul>
                    </div>
                </div>
                <div className='Midd_left_tarkib'>
                    <h3 className='Midd_left_tarkib_title'>Tarkib</h3>
                    <div className='Midd_left_tarkib_text'>
                        <ul className='Midd_left_tarkib_text_uilli'>
                            {
                                TarkipText.map((item2, index) => {
                                    return <li className='Midd_left_tarkib_text_uilli_liay' key={index}>{item2}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Midd_betwen'>
                <div className='Midd_betwen_top'>
                    <div className='Midd_betwen_top_phota'>
                        <img className='Midd_betwen_top_img' src="https://namanganliklar.uz/uploads/800x450/05575ebbd41cbccd1e2b94265ee5a17a.jpg" alt="Phota" />
                    </div>
                    <p className='Midd_betwen_top_img_text'>
                        Америкага юборишни ваъда қилган шахс фуқарони Африкага жўнатиб юборди
                    </p>
                </div>
                <div className='Midd_betwen_cards'>
                    <div className='Midd_betwen_cards_one'>
                        <div className='Midd_betwen_cards_one_phota'>
                            <img className='Midd_betwen_cards_one_imges' src="https://namanganliklar.uz/uploads/450x450/d62041dbcadbf982970d9329ee328da8.jpg" alt="" />
                        </div>
                        <div className='Midd_betwen_cards_one_items'>
                            <h4 className='Midd_betwen_cards_one_items_title'>ЎЗБЕКИСТОН</h4>
                            <p className='Midd_betwen_cards_one_items_text'>Ўзбекистонда дам олиш кунлари ҳам ҳаво жуда иссиқ бўлади</p>
                            <p className='Midd_betwen_cards_one_items_show'>Янги ҳафта ҳарорат кўтариладими?...</p>
                            <div className='Midd_betwen_cards_one_items_date'>
                                <p className='Midd_betwen_cards_one_items_date_time'>2024-07-26 15:13</p>
                                <span className='Midd_betwen_cards_one_items_date_show'>926</span>
                            </div>
                        </div>
                    </div>
                    <div className='Midd_betwen_cards_one'>
                        <div className='Midd_betwen_cards_one_phota'>
                            <img className='Midd_betwen_cards_one_imges' src="https://namanganliklar.uz/uploads/450x450/afa5f11ba9cb3a5dd14ddf034041dcb4.jpg" alt="" />
                        </div>
                        <div className='Midd_betwen_cards_one_items'>
                            <h4 className='Midd_betwen_cards_one_items_title'>ЎЗБЕКИСТОН</h4>
                            <p className='Midd_betwen_cards_one_items_text'>27 октябрь куни Ўзбекистонда сайлов бўлади</p>
                            <p className='Midd_betwen_cards_one_items_show'>Депутат Дониёр Ғаниев табиий газ билан учун белгиланган ижтимоий нормани оширишни сўради...</p>
                            <div className='Midd_betwen_cards_one_items_date'>
                                <p className='Midd_betwen_cards_one_items_date_time'>2024-07-26 15:13</p>
                                <span className='Midd_betwen_cards_one_items_date_show'>926</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Midd_right'>
                <div className='Midd_right_title'>
                    <h1 className='Midd_right_title_name'>
                        Энг кўп ўқилган
                    </h1>
                </div>
                <div className='Midd_right_items'>
                    <img className='Midd_right_items_imges' src="https://namanganliklar.uz/uploads/450x450/39bcee8e95471e032e328427d0a7a057.jpeg" alt="" />
                    <div className='Midd_right_items_things'>
                        <p className='Midd_right_items_things_text'>Гулнора Каримовани соғинган санъаткорлар норасмий тақиққа тушди</p>
                        <p className='Midd_right_items_things_date'> 2019-07-1   15:40</p>
                    </div>
                </div>
                <div className='Midd_right_items'>
                    <img className='Midd_right_items_imges' src="https://namanganliklar.uz/uploads/450x450/e90d437384c8be93c23be742f143022f.jpg" alt="" />
                    <div className='Midd_right_items_things'>
                        <p className='Midd_right_items_things_text'>Песков референдумдан кейин Украинани нима кутаётганини айтди</p>
                        <p className='Midd_right_items_things_date'> 2019-07-1   15:40</p>
                    </div>
                </div>
                <div className='Midd_right_items'>
                    <img className='Midd_right_items_imges' src="https://namanganliklar.uz/uploads/450x450/c90d91b4b7edffd79391d21f041aaf61.jpg" alt="" />
                    <div className='Midd_right_items_things'>
                        <p className='Midd_right_items_things_text'>Гулнора Каримовани соғинган санъаткорлар норасмий тақиққа тушди</p>
                        <p className='Midd_right_items_things_date'> 2019-07-1   15:40</p>
                    </div>
                </div>
                <div className='Midd_right_items'>
                    <img className='Midd_right_items_imges' src="https://namanganliklar.uz/uploads/450x450/39bcee8e95471e032e328427d0a7a057.jpeg" alt="" />
                    <div className='Midd_right_items_things'>
                        <p className='Midd_right_items_things_text'>Гулнора Каримовани соғинган санъаткорлар норасмий тақиққа тушди</p>
                        <p className='Midd_right_items_things_date'> 2019-07-1   15:40</p>
                    </div>
                </div>
                <div className='Midd_right_items'>
                    <img className='Midd_right_items_imges' src="https://namanganliklar.uz/uploads/450x450/39bcee8e95471e032e328427d0a7a057.jpeg" alt="" />
                    <div className='Midd_right_items_things'>
                        <p className='Midd_right_items_things_text'>Гулнора Каримовани соғинган санъаткорлар норасмий тақиққа тушди</p>
                        <p className='Midd_right_items_things_date'> 2019-07-1   15:40</p>
                    </div>
                </div>https://namanganliklar.uz/uploads/450x450/e90d437384c8be93c23be742f143022f.jpg
            </div>
        </div>
    );
}

export default Todos;
