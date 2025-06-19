---
layout: page
title: Manage Groups
parent: User Guide
grand_parent: Nuvla
nav_order: 4
permalink: /nuvla/groups
---

# Manage Groups

## What is a Group?

In Nuvla, a **Group** is a principal used to simplify access control and resource management.
A user can switch their active context to act on behalf of a group—enabling collaborative workflows under a shared identity.
Groups can also be organized hierarchically through subgroups, which inherit or delegate management responsibilities.
This enables fine-grained control within larger organizations, such as departments within a company.

- 🔐 **Simplified Access Control**\
  Rather than setting permissions per-user, assign them to a group for easier management.

- 🤝 **Team Workflows**\
  Workflows under a group identity avoid issues like transfers, ownership changes, or orphaned assets.

- 📋 **Auditing & Traceability**\
  Ownership and changes are recorded at a group level, simplifying compliance and accountability.

- 💰**Centralized Billing**\
When multiple users or subgroups consume resources, centralized billing under the parent group ensures consolidated cost reporting and accountability.

---

## Group Management

While the UI documentation is still evolving, here's how groups are typically used:

- **Active Group Switch**\
  After logging in, you can select which group you want to act as. The “active group” determines which permissions apply to your actions.

- **Group-Owned Resources**\
  Many resources can be assigned to a group instead of an individual. This enables team-wide control, centralized auditing, and simplified administration.

- **Resource Sharing**\
  You can share edge devices, apps, data, etc., with groups through the "share" feature. This makes permissions easier to manage by assigning collective access rights.

- **Subgroups**\
  Subgroups allow the nesting of teams, departments, or roles under a parent group. This can streamline permission inheritance and delegation across different organizational levels.

- **Billing and Cost Sharing**\
  Groups and subgroups can be configured to centralize billing.
  This allows usage and costs to be aggregated under the parent group, enabling transparent cost tracking and simplified invoicing for collaborative usage.

## Typical Workflow

1. **Create**\
    to define the group.

2. **Add Users**\
   Assign collaborators by inviting them to the group via the UI.

3. **Share Resources**\
   Share devices, apps, datasets, etc., with the group.

4. **Switch Context**\
   Use the "Switch Group" feature in UI or API to take group context.

5. **Operate**\
   Deploy applications, manage fleets, or provision infrastructure as the group.

6. **Audit**\
   Track actions and ownership by group in logs and ACLs.

---

## Access Control Model

- Every resource in Nuvla (edge, app deployment, infra, data) includes an ACL attribute.
- Groups can be owners or principal actors, and sharing is easily managed at group level.
- Changing the **active-claim** ensures you operate under the correct identity.
