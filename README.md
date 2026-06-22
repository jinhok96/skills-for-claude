# Skills Library for Claude Code

A comprehensive collection of **462+ AI Skills** for [Claude Code](https://claude.ai/code), ready to drop into your workspace.

These skills provide Claude with specialized, production-grade knowledge across domains like:

-   **Development**: React, Next.js, Python, TypeScript, Docker, Kubernetes
-   **AI & ML**: Prompt Engineering, RAG, LLM Architecture, Agents
-   **Business**: Product Management, SaaS, Marketing, SEO
-   **Specialized**: Game Dev, Biotech, Finance, Hardware

## Fast Start

1.  Copy the skill directories you want from the `skills` folder into your Claude Code skills directory:
    -   Global (all projects): `~/.claude/skills/`
    -   Project-specific: `.claude/skills/`

    For example, to add the `accessibility` skill globally:
    ```bash
    cp -r skills/accessibility ~/.claude/skills/
    ```

2.  That's it! Claude will automatically use these skills when relevant to your conversation, or you can invoke one directly with `/skill-name` (e.g., `/accessibility`). For more information, see the [Claude Code Skills Documentation](https://docs.anthropic.com/en/docs/claude-code/slash-commands).

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
