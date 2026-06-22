# Claude Code용 Skills 라이브러리

[English](README.md)

[Claude Code](https://claude.ai/code)에서 바로 사용할 수 있는 **462개 이상의 AI Skills** 모음입니다.

이 스킬들은 Claude에게 다양한 도메인의 전문 지식을 제공합니다:

-   **개발**: React, Next.js, Python, TypeScript, Docker, Kubernetes
-   **AI & ML**: 프롬프트 엔지니어링, RAG, LLM 아키텍처, 에이전트
-   **비즈니스**: 프로덕트 매니지먼트, SaaS, 마케팅, SEO
-   **전문 분야**: 게임 개발, 바이오텍, 금융, 하드웨어

## 빠른 시작

인터랙티브 설치 도구를 실행하고 원하는 스킬을 선택하세요:

```bash
npx @jinhok96/skills-for-claude
```

방향키와 Space로 선택하고, 텍스트를 입력해 목록을 필터링할 수 있습니다. Enter를 누르면 설치됩니다. 기본적으로 `~/.claude/skills/`에 설치되어 모든 프로젝트에서 사용할 수 있습니다.

현재 프로젝트에만 설치하려면:

```bash
npx @jinhok96/skills-for-claude --local
```

설치 후 Claude가 대화 내용과 관련이 있다고 판단하면 자동으로 스킬을 활성화하거나, `/skill-name` 형식으로 직접 호출할 수도 있습니다 (예: `/accessibility`). 자세한 내용은 [Claude Code Skills 공식 문서](https://docs.anthropic.com/en/docs/claude-code/slash-commands)를 참고하세요.

### 수동 설치

직접 복사해서 설치할 수도 있습니다:

```bash
# 전역
cp -r skills/accessibility ~/.claude/skills/

# 프로젝트별
cp -r skills/accessibility .claude/skills/
```

## 출처 및 품질

이 저장소는 [skills-for-antigravity](https://github.com/omer-metin/skills-for-antigravity)를 포크하여 Claude Code의 skill 시스템에 맞게 변환한 것입니다.

스킬 콘텐츠는 [Vibeship Spawner Skills](https://github.com/vibeforge1111/vibeship-spawner-skills) 프로젝트를 변환한 것입니다.

-   **원본**: YAML 형식으로 정의된 "프로덕션급 지식 시스템"
-   **변환**: Claude Code의 skill 시스템과 호환되도록 Markdown(`SKILL.md`) 형식으로 변환
-   **품질 개선**: AI를 활용해 원본 YAML 파일의 수백 개 포맷 오류 및 오타를 수정하여 가장 완성도 높은 버전으로 제공

*변환 과정에 대한 자세한 내용은 [conversion_tools/CONVERSION_PROCESS.md](conversion_tools/CONVERSION_PROCESS.md)를 참고하세요.*

## 라이선스

-   **Skills**: [Apache 2.0](LICENSE) (원본과 동일)
-   **원본 저작권**: Copyright (c) Vibeship (vibeforge1111).
