import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = () => {
  const code = `// durable-payment.ts
import { Resonate, Context } from "@resonatehq/sdk";

// 1) Initialize Resonate executor
const resonate = new Resonate();

// 2) Register purchase as a durable async function
resonate.register("purchase", purchase);

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
    // 5) Call the purchase function and wait for the result
    res.send(await resonate.run("purchase", id, user, song));
  } catch (err) {
    res.status(500).send("Could not purchase song");
  }
});`;

  return (
    <div className="overflow-auto text-sm">
      <SyntaxHighlighter
        language="typescript"
        style={nord}
        showLineNumbers={false}
        customStyle={{
          background: "rgb(24 24 27)",
          padding: "22px",
          borderRadius: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
