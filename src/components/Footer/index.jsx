import FooterStyled from './styled'
import { ButtonImageRoutes } from '../ButtonImageRoutes/'
import { PiTrademarkRegisteredLight } from 'react-icons/pi'

function Footer() {

    const buttonList = [
        {
            image: 'https://img.icons8.com/?size=512&id=yGcWL8copNNQ&format=png',
            alt: 'Facebook',
            link: '#',
            name: 'Facebook',
        },
        {
            image: 'https://img.icons8.com/?size=512&id=nj0Uj45LGUYh&format=png',
            alt: 'Instagram',
            link: '#',
            name: 'Instagram',
        },
        {
            image: 'https://img.icons8.com/?size=512&id=phOKFKYpe00C&format=png',
            alt: 'Twitter',
            link: '#',
            name: 'Twitter',
        }
    ]

    return (
        <FooterStyled>

            <div>
                <p>Medication Management</p>

                <div>
                    {buttonList.map(({ image, alt, link, name }, index) => {
                        return (
                            < ButtonImageRoutes
                                key={index}
                                imageSource={image}
                                altName={alt}
                                route={link}
                                buttonName={name}
                            />
                        )
                    })
                    }
                </div>

            </div>

            <p
                style={{ paddingBottom: '30px' }}
            > {<PiTrademarkRegisteredLight />}
                <strong>DEVinPharmacy LTDA</strong></p>

        </FooterStyled>
    )
}

export { Footer }