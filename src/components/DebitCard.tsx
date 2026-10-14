import ContactlessPaymentIcon from '../assets/icons/contactless-payment-white.webp';
import VisaLogo from '../assets/logos/VISA-logo.png';

export const DebitCard = () => {
    return (
        <div className="flex flex-col text-white bg-[#393939] bg-cover w-80 h-50 rounded-2xl p-3">
            <div className='flex flex-row items-center'>
                <div>
                    <h4>Balance</h4>
                    <h1 className='font-bold text-3xl'>$3,343.31</h1>
                </div>
                <div className='ml-auto'>
                    <img className='w-10' src={ContactlessPaymentIcon} alt="" />
                </div>
            </div>
            <div className='flex flex-row mt-auto items-center'>
                <div>
                    <h4 className=''>•••• 8293</h4>
                </div>
                <div className='ml-auto'>
                    <img className='w-17' src={VisaLogo} alt="" />
                </div>
            </div>
            
        </div>
    );
}