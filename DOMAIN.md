# DNS setup — mvconsulting.online (Namecheap)

Your domain uses Namecheap nameservers (`dns1/dns2.registrar-servers.com`). Keep those and add **A records** (recommended).

## Step 1 — Open Namecheap DNS
1. Go to [https://ap.www.namecheap.com](https://ap.www.namecheap.com) and sign in
2. Click **Domain List**
3. Find **mvconsulting.online** → click **Manage**
4. Open the **Advanced DNS** tab

## Step 2 — Add these two records
Delete any conflicting old A / CNAME / URL Redirect records for `@` or `www` first (parking pages, old hosts, etc.).

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| **A Record** | `@` | `76.76.21.21` | Automatic |
| **A Record** | `www` | `76.76.21.21` | Automatic |

Click the green checkmark to save each row.

## Step 3 — Wait, then check Vercel
1. Propagation is often 5–30 minutes (sometimes up to a few hours)
2. Open [Vercel Domains](https://vercel.com/vacarimihaela-4838s-projects/mv-consulting/settings/domains)
3. Both `mvconsulting.online` and `www.mvconsulting.online` should turn **Valid** with SSL
4. Visit https://www.mvconsulting.online

## Optional check from your Mac
```bash
dig +short mvconsulting.online A
dig +short www.mvconsulting.online A
```
Both should eventually return `76.76.21.21`.

## Do not change nameservers (unless you prefer Vercel DNS)
Only if you want Vercel to manage all DNS would you switch nameservers to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`. The A-record method above is enough.
