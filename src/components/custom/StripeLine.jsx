import React from 'react'

const StripeLine = () => {
  return (
    <div className="w-full py-3 bg-red-800  flex items-center justify-center overflow-hidden relative">
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      
      <p className="text-white/95 text-center text-sm md:text-base px-4 animate-handwriting font-medium tracking-wide relative">
        <span className="writing-text">
          विवेकज ऋषिष महाविष्णु नारायणजी की शंख- धवनि से स्वरित पावन शब्द गहोई का सृजन कर रहे है| यह कालांतर में गहोई समाज की उत्त्पत्ति का आधार बना|
        </span>
        {/* Cursor effect */}
        <span className="writing-cursor"></span>
      </p>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .writing-text {
          background: linear-gradient(90deg, #fff 0%, #fff 50%, transparent 50%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: writing 25s linear infinite;
        }

        @keyframes writing {
          0% {
            background-position: 100% 0;
            opacity: 0;
          }
          2% {
            opacity: 1;
          }
          48% {
            background-position: 0% 0;
            opacity: 1;
          }
          50% {
            background-position: 100% 0;
            opacity: 0;
          }
          100% {
            background-position: 100% 0;
            opacity: 0;
          }
        }

        .writing-cursor {
          position: absolute;
          width: 2px;
          height: 80%;
          background: white;
          right: 0;
          top: 10%;
          animation: cursor 25s linear infinite;
        }

        @keyframes cursor {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          2% {
            opacity: 1;
            transform: translateX(-100%);
          }
          48% {
            opacity: 1;
            transform: translateX(0%);
          }
          50% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }

        /* Pen tip glow effect */
        .writing-cursor::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          top: 100%;
          left: -1px;
          box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  )
}

export default StripeLine