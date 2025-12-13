import { Mail, Phone, MapPin } from "lucide-react";

export default function FooterContactSection() {
  return (
    <div className="bg-gradient-to-b from-[#013242] via-[#000a0e] to-black text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="border-t border-teal-500/30 pt-10">
          {/* Contact Info - Centered */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <a 
              href="mailto:hello@squareup.com" 
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                <Mail size={18} className="text-teal-400" />
              </div>
              <span className="font-medium">favazkoppath10@gmail.com</span>
            </a>
            
            <a 
              href="tel:+919181323309" 
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                <Phone size={18} className="text-teal-400" />
              </div>
              <span className="font-medium">+91 7510363359</span>
            </a>
            
            <button 
              onClick={() => window.open('https://maps.google.com', '_blank')} 
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                <MapPin size={18} className="text-teal-400" />
              </div>
              <span className="font-medium">Ernakulam,Kerala</span>
            </button>
          </div>
          
          {/* Copyright - Centered */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Thank you, Visit again
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}