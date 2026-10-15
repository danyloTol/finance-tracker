import ContactlessPaymentIcon from '../assets/icons/contactless-payment-white.webp';
import VisaLogo from '../assets/logos/VISA-logo.png';

interface CardProps {
    type: string;
    name: string;
    balance: number;
}

export const DebitCard = ({type, name, balance}: CardProps) => {
    return (
        <div className="flex flex-col text-white bg-[#393939] bg-cover w-full aspect-8/5 rounded-2xl p-3">
            <div className='flex flex-row items-center'>
                <div>
                    <h4 className='text-sm'>Balance</h4>
                    <h1 className='font-bold text-2xl'>${balance}</h1>
                </div>
                <div className='ml-auto'>
                    <img className='w-7' src={ContactlessPaymentIcon} alt="" />
                </div>
            </div>
            <div className='flex flex-row mt-auto items-center'>
                <div>
                    <h4 className='text-xs'>{type === 'debit card' ? `•••• ${name}` : name}</h4>
                </div>
                <div className='ml-auto'>
                    <img className='w-12' src={VisaLogo} alt="" />
                </div>
            </div>
            
        </div>
    );
}