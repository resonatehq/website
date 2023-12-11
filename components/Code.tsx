import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = () => {
  const code = `import { Resonate, Context } from "@resonatehq/sdk";
    
const resonate = new Resonate();
resonate.register("durablePurchase", purchase);
    
async function purchase(ctx: Context, user: User, song: Song): Promise<Status> {
  const charge = await ctx.run(chargeCreditCard, user, song);
  const access = await ctx.run(unlockUserAccess, user, song);
  return { charge, access };
}
    
export async function handlePurchase() {
  const user = { id: 1, name: "John" };
  const song = { id: 1, title: "Song 1" };
  const purchaseId = \`purchase-\${user.id}-\${song.id}\`;

  try {
    const result = await resonate.run("durablePurchase", purchaseId, user, song);
    // Logic for handling successful purchase
  } catch (err) {
    // Logic for handling purchase error
  }
}`;

  return (
    <div className="max-w-full bg-white shadow-colored rounded-lg overflow-auto mx-2 text-sm">
      <div className="px-4 py-2 border-b font-bold text-sm">
        durable-payment.tsx
      </div>
      <div className="py-2">
        <SyntaxHighlighter
          language="typescript"
          style={docco}
          showLineNumbers={true}
          customStyle={{ background: "none", padding: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
