# Skill Conversion Process

This repository contains a collection of AI skills converted from the [Vibeship Spawner Skills](https://github.com/vibeforge1111/vibeship-spawner-skills) project.

## Why Conversion?

The original skills were defined in YAML format, which is excellent for machine readability but less ideal for direct usage as context in AI IDEs like Claude Code. This project transforms those high-quality definitions into Markdown (`SKILL.md`) files that can be easily indexed and read by AI agents.

## The Process

1.  **Parsing**: The `convert_skills.py` script reads the YAML definitions from the source repository.
2.  **AI Repair**: Many of the original YAML files contained syntax errors, typos, or formatting issues that simpler parsers rejected. During the conversion process, I utilized AI to detect these malformed files and intelligently repair them, ensuring a much higher yield of usable skills than a strict programmatic conversion would allow.
3.  **Formatting**: The repaired data is then reformatted into the Claude Code Skill Standard, creating:
    -   `SKILL.md`: The main entry point.
    -   `references/patterns.md`: Best practices.
    -   `references/sharp_edges.md`: Common pitfalls.
    -   `references/validations.md`: Constraints and checks.

If you wish to run this conversion yourself, use the `convert_skills.py` script located in this directory.
