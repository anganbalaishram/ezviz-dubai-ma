import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
    return (
        <div className="whatsapp-container">
            <FloatingWhatsApp  
                accountName='Ezviz Dubai' 
                phoneNumber='+971552929644' 
                statusMessage="Live chat now"
                chatMessage="Welcome to Ezviz Dubai 🤝. How can we help?"
            />
        </div>
    )
}

export default Whatsapp;