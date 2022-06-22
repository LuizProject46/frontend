import style from './style.module.css'
import {FaSignOutAlt,FaBell} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
export default function LateralMenu(){
    const [showNotifications,setShowNotifications] = useState(false)

    useEffect(()=> {
        document.querySelector('div').addEventListener('click',() =>{
            setShowNotifications(false)
        },true)
    },[])
    return (
        <>
        <aside>
            <div className={style.user__info}>
                <div className={style.user__image}>
                   <Link to="/profile"><img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/></Link>
                </div>
                <div className={style.user__name}>
                    <label>Luiz</label>
                </div>
                <div className={style.menu__items}>
                    <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    ><FaBell/> <label>2</label></button>
                </div>
            </div>

            
           
            <div className={style.footer__nav}>
               
               <Link className={style.btn__logout} to="/"><label>Sair</label> <FaSignOutAlt/></Link>
            </div>
           
        </aside>
        <div  style={{display : showNotifications ? 'flex' : 'none'}} className={style.notification__card}>
            <div className={style.notification__card__header}>
                <h2>Notificações</h2>
            </div>
            <div className={style.notification__card__body}>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>
                <div className={style.notification__card__item}>
                    <div className={style.notification__user_img}>
                        <img src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-1/p160x160/137501551_1617170655120873_5347443589987418791_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeG4OEtJ1e5BeLBCJ8aBMmMMKeBzAp2cyQEp4HMCnZzJAUq9up_ma89OzBiQx88he3p2tTlpesne_zCr2-9NF9Ew&_nc_ohc=yy1gXyyH5wwAX_Bw3pw&_nc_ht=scontent.fplu8-1.fna&tp=6&oh=521702c1fdad96747270e3621b14cf85&oe=6060F4B0" alt=""/>
                    </div>
                    <div className={style.notification__user_noti}>
                        <label><span><strong>Louis </strong></span> curtiu sua foto</label>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    )
}