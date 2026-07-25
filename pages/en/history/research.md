---
title: MAD·AMV Research Methods and Survey
description: A collection framework for historical verification, creator conditions, and career pathways
---

# Research Methods and Survey

The main problem with existing MAD·AMV historical material is not a complete lack of articles, but opaque samples, the mixing of recollection and fact, and dead primary links. This page provides a reproducible collection framework without presenting an unimplemented survey as research findings.

## Research Objectives

1. Preserve first-hand memories from creators, community administrators, contest organizers, and audiences across different periods;
2. Understand learning pathways, commonly used tools, production time, and forms of collaboration;
3. Observe the relationship between MAD·AMV skills and education, freelance work, and formal employment;
4. Build datasets, interview catalogs, and evidence links that can be published anonymously.

## Conclusions That Must Not Be Inferred Directly

- Bilibili view counts do not represent the number of creators across the entire community;
- A decline in Tieba posts does not directly prove a decline in creator numbers;
- Using After Effects or Premiere Pro does not mean a creator works professionally in video;
- The careers of a small number of prominent creators do not represent ordinary creators;
- Voluntary online surveys have substantial self-selection bias.

## Survey Structure

### A. Background

1. In what year and on which platform did you first encounter MAD/AMV?
2. What is your country or region, and which language do you primarily use?
3. Which self-descriptions do you use most often: MADer, AMV editor, video creator, editor, or something else?
4. How do you participate: creation, viewing, contests, organization, tutorials, translation, or source organization?

Avoid collecting real names, exact addresses, workplaces, and unnecessary contact details.

### B. Creation and Learning

1. Which resources did you first learn from: Tieba, Bilibili, blogs, forums, school, friends, or official courses?
2. Which software, plugins, and hardware do you currently use, and which versions?
3. How many hours does one work generally require? Which stage takes the most time?
4. Do you participate in MEPs, ICs, contests, or teams? How are responsibilities and delivery organized?
5. Which problems occur most often: source material, copyright, technique, feedback, time, equipment, or platform rules?

### C. Community and History

1. Which platforms or organizations that have closed or declined did you participate in?
2. Do you retain old projects, event posters, submission forms, screenshots, or backups of original posts?
3. Which events did you experience directly, and which did you learn about through others?
4. Do you consent to having materials archived under your real name, username, anonymously, or under an access embargo?

Each historical statement should include “date, place or platform, role, evidence, and whether it was personally witnessed.”

### D. Employment and Skill Transfer

1. Has MAD·AMV experience helped you obtain paid projects, internships, an admissions portfolio, or formal employment?
2. Was the related work in editing, motion design, graphic design, 3D, audio, directing, operations, education, or another field?
3. Through which channel did you obtain your first related opportunity?
4. Which abilities transfer most effectively to professional work: rhythm, narrative, software, collaboration, aesthetics, or project management?
5. What is the largest difference between community conventions and professional standards?
6. Have you encountered issues involving rates, contracts, credit, source licensing, overtime, or portfolio confidentiality?
7. Would you like to continue in a related career, and why?

### E. Sustainability

1. What would make you continue or stop creating?
2. What should the community preserve first: works, projects, tutorials, interviews, contest results, or organizational archives?
3. Would you contribute tutorials or resources for which you own the copyright under an open license?

## Interviews and Historical Verification

Surveys are useful for observing distributions, while semi-structured interviews are better for historical detail. A verification sample for each key event should include:

- One organizer;
- One participant;
- One ordinary observer at the time;
- One contemporary page, file, email, poster, or work list.

When recollections conflict, present the versions and evidence in parallel rather than forcing a resolution for the reader.

## Data Publication Standards

| Content | Recommended public format |
| --- | --- |
| Survey questions and versions | Markdown with a revision history |
| Aggregated data | De-identified CSV/JSON with missing values and sampling bias explained |
| Interviews | Transcripts approved by interviewees, with anonymous or delayed-publication options |
| Web evidence | Original URL, access date, web archive URL, and screenshot description |
| Attachments | Checksum, file format, rights holder, and license |
| Research conclusions | Separates data findings, researcher interpretation, and hypotheses still requiring verification |

::: warning Ethics and privacy
Information involving minors, real professional identities, community conflicts, income, contracts, and contact details is high risk. Publication requires explicit consent, de-identification, and a withdrawal process. “It was said in the group” does not mean consent to permanent public disclosure.
:::

## Historical Record Data Structure

```yaml
event: event name
date_start: YYYY-MM-DD
date_end: YYYY-MM-DD
platform: platform／location
participants: names approved for publication
claim: fact or recollection to be recorded
evidence_type: contemporary page／file／first-hand interview／second-hand account
primary_url: original URL
archive_url: lawful web archive
accessed_at: YYYY-MM-DD
confidence: A | B | C
rights: rights and permission for publication
notes: conflicting accounts, missing fields, and follow-up verification tasks
```

For the existing long-form creator study, see [Interview Study of MAD Creators on Chinese Online Platforms (Chinese text)](/mad/ccopw). It can identify useful questions, but any new study must independently document its sample, recruitment, period, and ethical procedures.
