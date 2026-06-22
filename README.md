# Skills Library for Claude Code

A comprehensive collection of **462+ AI Skills** for [Claude Code](https://claude.ai/code), ready to drop into your workspace.

These skills provide Claude with specialized, production-grade knowledge across domains like:

-   **Development**: React, Next.js, Python, TypeScript, Docker, Kubernetes
-   **AI & ML**: Prompt Engineering, RAG, LLM Architecture, Agents
-   **Business**: Product Management, SaaS, Marketing, SEO
-   **Specialized**: Game Dev, Biotech, Finance, Hardware

## Fast Start

Run the interactive installer and pick the skills you want:

```bash
npx skills-for-claude
```

Use arrow keys and Space to select, type to filter the list, then Enter to install. Skills are installed to `~/.claude/skills/` by default (available in all projects).

To install into the current project only:

```bash
npx skills-for-claude --local
```

Once installed, Claude will automatically use a skill when relevant to your conversation, or you can invoke one directly with `/skill-name` (e.g., `/accessibility`). For more information, see the [Claude Code Skills Documentation](https://docs.anthropic.com/en/docs/claude-code/slash-commands).

### Manual installation

If you prefer, copy skill directories directly:

```bash
# Global
cp -r skills/accessibility ~/.claude/skills/

# Project-specific
cp -r skills/accessibility .claude/skills/
```

## Origin & Quality

This repository is a fork of [skills-for-antigravity](https://github.com/omer-metin/skills-for-antigravity), adapted for Claude Code's skill system.

The skills themselves are converted from the excellent [Vibeship Spawner Skills](https://github.com/vibeforge1111/vibeship-spawner-skills) project.

-   **Source**: The original skills are "production-grade knowledge systems" defined in YAML.
-   **Conversion**: Converted into Markdown (`SKILL.md`) for compatibility with Claude Code's skill system.
-   **Enhanced Reliability**: AI was used to repair hundreds of formatting issues and typos present in the original YAML files, ensuring this is one of the most complete and usable versions of this dataset available.

*For details on how the conversion was performed, see [conversion_tools/CONVERSION_PROCESS.md](conversion_tools/CONVERSION_PROCESS.md).*

## License

-   **Skills**: [Apache 2.0](LICENSE) (Same as original source)
-   **Original Source**: Copyright (c) Vibeship (vibeforge1111).
