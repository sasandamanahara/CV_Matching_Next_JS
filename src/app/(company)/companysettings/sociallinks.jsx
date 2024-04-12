import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SocialLinks() {
  return (
    <>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Facebook</Label>
      <Input type="" id="facebook" placeholder="https://www.facebook.com/company"/>
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="instagram">Instagram</Label>
      <Input type="" id="instagram" placeholder="https://www.instagram.com/company" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="twitter">Twitter</Label>
      <Input type="" id="twitter" placeholder="https://www.twitter.com/company" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="linkdin">Linkdin</Label>
      <Input type="" id="linkdin" placeholder="https://www.linkdin.com/company" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="youtube">Youtube</Label>
      <Input type="" id="youtube" placeholder="https://www.youtube.com/company"/>
    </div>
    
    </>
    
    
  )
}
