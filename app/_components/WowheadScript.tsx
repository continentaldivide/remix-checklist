import Script from "next/script"

export default function WowheadScript() {
  return (
    <>
      <Script id="wowhead-tt">
        {`const whTooltips = {colorLinks: false, iconSize: 'medium', iconizeLinks: true, renameLinks: false};`}
      </Script>
      <Script src="https://wow.zamimg.com/js/tooltips.js" />
    </>
  )
} 