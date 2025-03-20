import AvatarWallet from "./avatar";
import Wallet from "./wallet";

const Left = () => {
  return (
    <>
      <div className="flex">
        <Wallet />
        <AvatarWallet />
      </div>
    </>
  );
};

export default Left;
