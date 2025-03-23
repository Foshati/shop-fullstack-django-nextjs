
import Image from "next/image";

export const Logo = () => (
  <div>
    <Image src="/Nextpress.png" alt="Logo" width={40} height={40} priority className="object-cover rounded-full" />
  </div>
);
