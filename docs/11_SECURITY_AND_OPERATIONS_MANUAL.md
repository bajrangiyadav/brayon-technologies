# 🛡️ BRAYON Technologies — Security & Engineering Operations Manual

> *"Professional agencies never store client source code only on one laptop. We operate with enterprise hygiene from Day 1."*

---

## 1. Code Repository & Organization Standards

### GitHub Organization Setup
- Organization Name: `BRAYON-Technologies`
- All client projects must be created as **Private Repositories** under the official organization.
- **Branch Protection Rules:**
  - `main` branch is protected. Direct commits are disallowed.
  - Pull Requests (PRs) required before merge.
  - Automated CI checks (Linting, TypeScript compilation, Unit tests) must pass.
  - Branch naming convention: `feature/short-desc`, `fix/issue-id`, `hotfix/urgent`.

---

## 2. Access Control & Identity Security

1. **Two-Factor Authentication (2FA):** Mandatory hardware key or authenticator app (e.g. Google Authenticator / 1Password) on all company accounts (GitHub, AWS, Vercel, Google Workspace, Domain Registrars).
2. **Password Management:** Bitwarden or 1Password team vault for rotating production secrets and API keys. Never commit `.env` or API credentials to git.
3. **Environment Segregation:**
   - **Local (`development`):** Local Postgres/Redis Docker containers or SQLite.
   - **Staging (`preview`):** Vercel Preview Deployments or AWS Staging VPC with sanitized mock data.
   - **Production (`main`):** Isolated cloud databases with automated daily snapshots.

---

## 3. Deployment & CI/CD Pipelines

- **Frontend & Web Apps:** Automated Vercel / Cloudflare Pages deployment triggered on merge to `main`. Instant rollbacks enabled.
- **Backend & APIs:** GitHub Actions running Docker build & automated deployment to AWS ECS / DigitalOcean App Platform / Railway.
- **SSL / HTTPS:** Automated Let's Encrypt / Cloudflare Edge SSL certificates with HSTS enforced.

---

## 4. Disaster Recovery & Automated Backups

1. **Database Snapshots:** Daily automated backups of PostgreSQL/MySQL retained for 30 rolling days.
2. **Weekly Off-Site Replication:** Encrypted snapshots mirrored to an independent AWS S3 / Cloudflare R2 bucket in a separate geographic region.
3. **Recovery Time Objective (RTO):** Under 60 minutes.
4. **Recovery Point Objective (RPO):** Under 24 hours.

---

## 5. Client Code Handover Protocol

Upon completion of User Acceptance Testing (UAT) and settlement of the final invoice:
1. Client establishes their own GitHub account or AWS / Vercel organization.
2. Transfer repository ownership or grant Admin permissions to the Client's technical representative.
3. Deliver a compiled **Architecture Handover Document**:
   - Repository clone instructions
   - Environment variables inventory
   - Database migration commands
   - Third-party API dashboard access credentials
4. Initiate the **30-Day Hypercare Warranty Period**.
