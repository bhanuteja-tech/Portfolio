import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-8 mt-20 border-t border-gray-700">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">Designed & Developed by Bhanuteja 🚀</p>
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/bhanuteja-tech" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bhanuteja12/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:bhanutejasubbara@gmail.com" className="hover:text-white">
            <FaEnvelope />
          </a>
          <a href="/assets/BhanuTeja(R21EH103).pdf" download className="hover:text-white">
            <FaFileDownload />
          </a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
