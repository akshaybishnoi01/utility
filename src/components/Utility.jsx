import React from 'react'
import { Circle1 } from '../assets/icon'
import men1 from '../assets/image/webp/men1.webp'
import men2 from '../assets/image/webp/men2.webp'
const Utility = () => {

    return (
        <>
            <section className=' lg:pt-[133px] md:pt-[100px] sm:pt-[70px] pt-[50px]  lg:pb-[150px] md:pb-[100px] sm:pb-[70px] pb-[50px] relative'>
                <div className=' container mx-auto px-3 relative'>
                    <div className=' flex flex-col items-center  justify-center'>
                        <h1 className=' font-DelaGothic font-normal md:text-[40px] sm:text-[35px] text-[32px]  text-center text-[#000000] md:leading-[48px] sm:leading-[44px] leading-[40px] max-w-[235px]'>
                            UTILITY
                        </h1>
                        <p className=' font-Balsamiq max-w-[728px] text-center font-normal text-[#000000] pt-4 md:text-[16px] text-[14px]  md:leading-[24px] leading-[20px] opacity-70'>
                            Now, you might be wondering, what can I do with TROLLMP? Well, let me tell you, the possibilities are endless! You can use TROLLMP to vote on your favorite memes, tip your favorite creators, or even trade them on the open market. It's freedom, folks, freedom like you've never seen before!
                        </p>

                        <div className=' lg:pt-[70px] md:pt-[50px] pt-[30px]'>
                            <div className=' relative flex  sm:gap-[30px] gap-[20px] lg:pb-[43px] md:pb-[30px] pb-[19px]'>
                                <div className=" before:absolute before:left-[12px] before:top-6 before:h-full before:w-2 before:bg-[#DF4741]">
                                    <Circle1 />
                                </div>
                                <div className=' flex flex-col'>
                                    <p className=' font-Balsamiq max-w-[108px] pt-2 font-bold md:text-[18px] text-[16px] text-[#000000] leading-[21px]'>
                                        Voting Rights
                                    </p>
                                    <p className=' max-w-[655px] font-Balsamiq font-normal md:text-[16px] text-[14px] pt-2 text-[#000000] opacity-70 md:leading-[24px] leading-[20px]'>
                                        Holders of TROLLMP will have the opportunity to participate in governance proposals, enabling them to vote on key decisions related to the development and direction of the TROLLMP ecosystem.
                                    </p>
                                </div>
                            </div>
                            <div className=' relative flex sm:gap-[30px] gap-[20px] pb-[19px] '>
                                <div className=" before:absolute before:left-[12px] before:top-6 before:h-full before:w-2 before:bg-[#DF4741]">
                                    <Circle1 />
                                </div>
                                <div className=' flex flex-col'>
                                    <p className=' font-Balsamiq pt-2 max-w-[204px] font-bold md:text-[18px] text-[16px] text-[#000000] leading-[21px]'>
                                        Meme Creation Rewards
                                    </p>
                                    <p className=' max-w-[655px] font-Balsamiq font-normal md:text-[16px] text-[14px] pt-2 text-[#000000] opacity-70 md:leading-[24px] leading-[20px]'>
                                        TROLLMP holders will be eligible to receive rewards for creating and sharing high-quality memes within the TROLLMP community, encouraging active participation and engagement.
                                    </p>
                                </div>
                            </div>
                            <div className=' relative flex sm:gap-[30px] gap-[20px] lg:pb-[43px] md:pb-[30px] pb-[19px]'>
                                <div className=" before:absolute before:left-[12px] before:top-6 before:h-full before:w-2 before:bg-[#DF4741]">
                                    <Circle1 />
                                </div>
                                <div className=' flex flex-col'>
                                    <p className=' font-Balsamiq pt-2 max-w-[240px] font-bold md:text-[18px] text-[16px] text-[#000000] leading-[21px]'>
                                        Access to Platform Features
                                    </p>
                                    <p className=' max-w-[655px] font-Balsamiq font-normal md:text-[16px] text-[14px] pt-2 text-[#000000] opacity-70 md:leading-[24px] leading-[20px]'>
                                        TROLLMP will unlock exclusive features and privileges within the TROLLMP platform, such as access to premium content, special events, and enhanced voting capabilities.
                                    </p>
                                </div>
                            </div>
                            <div className=' relative flex sm:gap-[30px] gap-[20px]'>
                                <div className="">
                                    <Circle1 />
                                </div>
                                <div className=' flex flex-col'>
                                    <p className=' font-Balsamiq pt-2 max-w-[148px] font-bold md:text-[18px] text-[16px] text-[#000000] leading-[21px]'>
                                        Liquidity Provision
                                    </p>
                                    <p className=' max-w-[655px] font-Balsamiq font-normal md:text-[16px] text-[14px] pt-2 text-[#000000] opacity-70 md:leading-[24px] leading-[20px]'>
                                        TROLLMP holders can contribute to liquidity pools on decentralized exchanges, facilitating trading and liquidity provision for the TROLLMP token.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' 2xl:flex hidden absolute top-[-8%] right-[4%] -z-10'>
                        <img src={men1} alt="#" />
                    </div>
                    <div className='2xl:flex hidden absolute left-[3%] bottom-[-5%] -z-10'>
                        <img className=' max-w-[306px] w-full' src={men2} alt="#" />
                    </div>
                </div>
                <div className=' 2xl:hidden sm:flex hidden absolute xl:opacity-100 opacity-40 md:top-[8%] top-[6%] xl:right-[1%] right-0 -z-10'>
                        <img className=' xl:max-w-[306px] md:max-w-[280px] max-w-[180px] w-full' src={men1} alt="#" />
                    </div>
                    <div className='2xl:hidden sm:flex hidden xl:opacity-100 opacity-40 absolute xl:left-[1%] left-0 lg:bottom-[12%] bottom-[3%] -z-10'>
                        <img className='xl:max-w-[306px] md:max-w-[280px] max-w-[180px] w-full' src={men2} alt="#" />
                    </div>
            </section>
        </>
    )
}

export default Utility
