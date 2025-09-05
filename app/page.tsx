import { Github, Package, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ElegantShape } from "@/components/ui/elegant-shape";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">sweet-commit</h1>
          <p className="text-lg text-white/60 mb-8">
            Interactive CLI tool for writing conventional commit messages
          </p>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="https://github.com/d3xfoo/sweet-commit">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.npmjs.com/package/sweet-commit">
                <Package className="w-4 h-4" />
                Install
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6 font-mono text-sm">
            <div className="text-white/60 mb-2">
              $ npm install -g sweet-commit
            </div>
            <div className="text-white/60 mb-2">$ git add .</div>
            <div className="text-white/60 mb-4">$ scom</div>

            <div className="space-y-2">
              <div className="text-white">? Select the type of change:</div>
              <div className="text-primary pl-2">❯ feat: A new feature</div>
              <div className="text-white/60 pl-2"> fix: A bug fix</div>
              <div className="text-white/60 pl-2">
                {" "}
                docs: Documentation only changes
              </div>
              <div className="text-white/60 pl-2">
                {" "}
                refactor: A code change that neither fixes a bug nor adds a
                feature
              </div>
            </div>
          </div>
        </div>

        <div id="install" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4 font-mono text-sm mb-4">
            npm install -g sweet-commit
          </div>
          <p className="text-white/60">
            After installation, use{" "}
            <code className="bg-white/[0.05] px-1 rounded">scom</code> in any
            git repository to start the interactive commit process.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6">
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>
                Stage your changes:{" "}
                <code className="bg-white/[0.05] px-1 rounded">git add .</code>
              </li>
              <li>
                Run sweet-commit:{" "}
                <code className="bg-white/[0.05] px-1 rounded">scom</code>
              </li>
              <li>
                Follow the interactive prompts to build your commit message
              </li>
              <li>Review and confirm your commit</li>
            </ol>
          </div>
        </div>

        {/* 
        <div className="relative aspect-video w-full max-w-3xl mx-auto mb-16 bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
            <iframe
              src=""
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        */}

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
              <h3 className="font-medium mb-2">Interactive Interface</h3>
              <p className="text-sm text-white/60">
                User-friendly prompts guide you through each step
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
              <h3 className="font-medium mb-2">Conventional Commits</h3>
              <p className="text-sm text-white/60">
                Enforces conventional commit standards automatically
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
              <h3 className="font-medium mb-2">Breaking Changes</h3>
              <p className="text-sm text-white/60">
                Supports breaking change descriptions
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
              <h3 className="font-medium mb-2">Issue Linking</h3>
              <p className="text-sm text-white/60">
                Link commits to multiple issues
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-white/60">
          <p>
            Made by{" "}
            <a href="https://github.com/d3xfoo" className="hover:text-white">
              d3xfoo
            </a>
            <a href="https://twitter.com/d3xfoo" className="hover:text-white">
              <TwitterIcon className="w-4 h-4 ml-2 inline-block align-middle" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
