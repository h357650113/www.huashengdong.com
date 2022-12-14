import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="dependence">
                <h1>Dependence</h1>
                <div className="wrap">
                    <Item
                        src={'https://zh-hans.reactjs.org/'}
                        imgSrc={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/blog/images/screencapture-zh-hans-reactjs-org-2022-09-01-17_14_33.jpg'
                        }
                    />
                    <Item
                        src={'https://reactrouter.com/en/main'}
                        imgSrc={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/www/screencapture-reactrouter-en-v6-3-0-guides-ssr-2022-09-01-17_19_25.jpg'
                        }
                    />
                    <Item
                        src={'https://recharts.org/en-US'}
                        imgSrc={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/blog/images/screencapture-recharts-org-en-US-2022-09-01-16_19_58.png'
                        }
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="info">
                    <p>copyright@2022 www.huashengdong.com</p>
                    <p>Email: 357650113@qq.com</p>
                    <p>ICP证: 冀ICP备17036318号</p>
                    <p>河北网安备案：13030202002503号</p>
                </div>
            </div>
        </div>
    )
}

const Item = ({ src, imgSrc }) => {
    const handleItemClick = () => {
        window.open(src, '__back')
    }
    return (
        <div onClick={handleItemClick} className="item">
            <div className="min-header">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
            <div className="pic">
                <img src={imgSrc} alt="" />
            </div>
        </div>
    )
}
