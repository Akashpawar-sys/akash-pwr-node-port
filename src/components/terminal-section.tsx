"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const quotes = [
  {
    command: "$ devops --philosophy",
    output: '"With great power comes great electricity bill" - Dr. Who'
  },
  {
    command: "$ kubectl get wisdom",
    output: '"Automate everything, trust nothing, monitor all" - DevOps Proverb'
  },
  {
    command: "$ terraform apply -auto-approve",
    output: '"Infrastructure as Code: Because clicking buttons is so 2010" - Anonymous'
  }
];

export default function TerminalSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const quote = quotes[currentQuote];
    let commandIndex = 0;
    let outputIndex = 0;

    // Type command
    const commandInterval = setInterval(() => {
      if (commandIndex < quote.command.length) {
        setDisplayedCommand(quote.command.slice(0, commandIndex + 1));
        commandIndex++;
      } else {
        clearInterval(commandInterval);
        
        // Start typing output after command is complete
        setTimeout(() => {
          const outputInterval = setInterval(() => {
            if (outputIndex < quote.output.length) {
              setDisplayedOutput(quote.output.slice(0, outputIndex + 1));
              outputIndex++;
            } else {
              clearInterval(outputInterval);
              
              // Wait before cycling to next quote
              setTimeout(() => {
                setDisplayedCommand("");
                setDisplayedOutput("");
                setCurrentQuote((prev) => (prev + 1) % quotes.length);
              }, 5000);
            }
          }, 30);
        }, 500);
      }
    }, 50);

    return () => clearInterval(commandInterval);
  }, [currentQuote]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm rounded-lg border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-500/10">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-purple-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-mono text-muted-foreground">terminal</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm sm:text-base">
            <div className="mb-4">
              <span className="text-green-400">akashpawar@devops</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-foreground">{displayedCommand}</span>
              {!displayedOutput && showCursor && (
                <span className="inline-block w-2 h-5 bg-purple-400 ml-1 animate-pulse" />
              )}
            </div>

            {displayedOutput && (
              <div className="text-purple-300 pl-0 leading-relaxed">
                {displayedOutput}
                {showCursor && (
                  <span className="inline-block w-2 h-5 bg-purple-400 ml-1 animate-pulse" />
                )}
              </div>
            )}
          </div>

          {/* Decorative Code Lines */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 blur-3xl" />
          </div>
        </div>

        {/* Quote Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDisplayedCommand("");
                setDisplayedOutput("");
                setCurrentQuote(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote 
                  ? "bg-purple-400 w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
