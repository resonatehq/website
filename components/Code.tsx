import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import holiTheme from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = () => {
  const code = `import { Resonate, Context } from "@resonatehq/sdk";

// 1) Initialize Resonate executor
const resonate = new Resonate();

// 2) Register an async function as a durable async function
resonate.register("durablePurchase", purchase);

async function purchase(ctx: Context, user: User, song: Song): Promise<Status> {
  const charged = await ctx.run(charge, user, song);
  const granted = await ctx.run(access, user, song);
  return { charged, granted };
}

// 3) Setup logic for routing to durable async function
app.post("/purchase", async (req: Request, res: Response) => {
  const user = { id: req.body?.user ?? 1 };
  const song = { id: req.body?.song ?? 1, price: 1.99 };

  // 4) uniquely identify the execution
  const id = \`purchase-\${user.id}-\${song.id}\`;
  try {
    res.send(await resonate.run("purchase", id, user, song));
  } catch (err) {
    res.status(500).send("Could not purchase song");
  }
});`;

  return (
    <div className="max-w-full bg-white shadow-colored rounded-lg overflow-auto mx-2 text-sm">
      <div className="px-4 py-2 border-b font-bold text-sm">
        durable-payment.tsx
      </div>
      <div className="py-2">
        <SyntaxHighlighter
          language="typescript"
          style={holiTheme}
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
