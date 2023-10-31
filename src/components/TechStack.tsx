import {
  SiAlpinelinux,
  SiAlpinelinuxHex,
  SiAngular,
  SiAngularHex,
  SiAstro,
  SiAstroHex,
  SiBootstrap,
  SiBootstrapHex,
  SiCss3,
  SiCss3Hex,
  SiDebian,
  SiDebianHex,
  SiDiscord,
  SiDiscordHex,
  SiDocker,
  SiDockerHex,
  SiFigma,
  SiFigmaHex,
  SiGo,
  SiGoHex,
  SiHackclub,
  SiHackclubHex,
  SiHtml5,
  SiHtml5Hex,
  SiMaterialdesign,
  SiMaterialdesignHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiPortainer,
  SiPortainerHex,
  SiPython,
  SiPythonHex,
  SiSupabase,
  SiSupabaseHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiUnocss,
  SiUnocssHex,
  SiVisualstudiocode,
  SiVisualstudiocodeHex,
} from "@icons-pack/react-simple-icons";

export default function TechStack() {
  const techStack = [
    {
      name: "Web Frameworks",
      color: "#3EACFC",
      stack: [
        {
          name: "Astro",
          icon: (
            <SiAstro
              className="w-6 h-6"
              style={{
                color: SiAstroHex,
              }}
            ></SiAstro>
          ),
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-6 h-6 text-white"></SiNextdotjs>,
        },
        {
          name: "Angular",
          icon: (
            <SiAngular
              className="w-6 h-6"
              style={{
                color: SiAngularHex,
              }}
            ></SiAngular>
          ),
        },
        {
          name: "HTML",
          icon: (
            <SiHtml5
              className="w-6 h-6"
              style={{
                color: SiHtml5Hex,
              }}
            ></SiHtml5>
          ),
        },
      ],
    },
    {
      name: "UI/CSS Frameworks",
      color: "#703EFC",
      stack: [
        {
          name: "TailwindCSS",
          icon: (
            <SiTailwindcss
              className="w-6 h-6"
              style={{
                color: SiTailwindcssHex,
              }}
            ></SiTailwindcss>
          ),
        },
        {
          name: "UnoCSS",
          icon: (
            <SiUnocss
              className="w-6 h-6"
              style={{
                color: SiUnocssHex,
              }}
            ></SiUnocss>
          ),
        },
        {
          name: "Material Design",
          icon: (
            <SiMaterialdesign
              className="w-6 h-6"
              style={{
                color: SiMaterialdesignHex,
              }}
            ></SiMaterialdesign>
          ),
        },
        {
          name: "Bootstrap",
          icon: (
            <SiBootstrap
              className="w-6 h-6"
              style={{
                color: SiBootstrapHex,
              }}
            ></SiBootstrap>
          ),
        },
        {
          name: "CSS",
          icon: (
            <SiCss3
              className="w-6 h-6"
              style={{
                color: SiCss3Hex,
              }}
            ></SiCss3>
          ),
        },
      ],
    },
    {
      name: "Backend",
      color: "#FC6C3E",
      stack: [
        {
          name: "Supabase",
          icon: (
            <SiSupabase
              className="w-6 h-6"
              style={{
                color: SiSupabaseHex,
              }}
            ></SiSupabase>
          ),
        },
        {
          name: "Go",
          icon: (
            <SiGo
              className="w-6 h-6"
              style={{
                color: SiGoHex,
              }}
            ></SiGo>
          ),
        },
        {
          name: "Typescript",
          icon: (
            <SiTypescript
              className="w-6 h-6"
              style={{
                color: SiTypescriptHex,
              }}
            ></SiTypescript>
          ),
        },
        {
          name: "Python",
          icon: (
            <SiPython
              className="w-6 h-6"
              style={{
                color: SiPythonHex,
              }}
            ></SiPython>
          ),
        },
      ],
    },
    {
      name: "SysAdmin",
      color: "#FC3E3E",
      stack: [
        {
          name: "Docker",
          icon: (
            <SiDocker
              className="w-6 h-6"
              style={{
                color: SiDockerHex,
              }}
            ></SiDocker>
          ),
        },
        {
          name: "Portainer",
          icon: (
            <SiPortainer
              className="w-6 h-6"
              style={{
                color: SiPortainerHex,
              }}
            ></SiPortainer>
          ),
        },
        {
          name: "Alpine Linux",
          icon: (
            <SiAlpinelinux
              className="w-6 h-6"
              style={{
                color: SiAlpinelinuxHex,
              }}
            ></SiAlpinelinux>
          ),
        },
        {
          name: "Debian",
          icon: (
            <SiDebian
              className="w-6 h-6"
              style={{
                color: SiDebianHex,
              }}
            ></SiDebian>
          ),
        },
      ],
    },
    {
      name: "Other",
      color: "#434343",
      stack: [
        {
          name: "Figma",
          icon: (
            <SiFigma
              className="w-6 h-6"
              style={{
                color: SiFigmaHex,
              }}
            ></SiFigma>
          ),
        },
        {
          name: "Hack Club",
          icon: (
            <SiHackclub
              className="w-6 h-6"
              style={{
                color: SiHackclubHex,
              }}
            ></SiHackclub>
          ),
        },
        {
          name: "Discord",
          icon: (
            <SiDiscord
              className="w-6 h-6"
              style={{
                color: SiDiscordHex,
              }}
            ></SiDiscord>
          ),
        },
        {
          name: "VSCode",
          icon: (
            <SiVisualstudiocode
              className="w-6 h-6"
              style={{
                color: SiVisualstudiocodeHex,
              }}
            ></SiVisualstudiocode>
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex items-start content-start gap-3 self-stretch flex-wrap">
      {techStack.map((s) => (
        <div className="flex flex-col items-start">
          <div
            className="flex py-1 px-1.5 items-start gap-3 border rounded-t-md text-xs"
            style={{
              borderColor: s.color,
              backgroundColor: s.color,
            }}
          >
            {s.name}
          </div>
          <div
            className="flex p-3 items-start content-start gap-3 self-stretch flex-wrap rounded-tl-none rounded-sm border-dashed border-2"
            style={{
              borderColor: s.color,
            }}
          >
            {s.stack.map((t) => (
              <span title={t.name}>{t.icon}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
