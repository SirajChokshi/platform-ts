# platform-ts

![Size Minified](https://img.shields.io/bundlephobia/min/platform-ts)
![License](https://img.shields.io/npm/l/platform-ts)
![Version](https://img.shields.io/npm/v/platform-ts)
![Downloads](https://img.shields.io/npm/dt/platform-ts)

A type-safe utility for user-agent sniffing. It uses [ua-parser-js](https://github.com/faisalman/ua-parser-js) under the hood, but provides a richer API with discriminated unions providing type-safety for the most common, known results with escape hatches for less common user agents.

## Installation

```bash
npm install platform-ts # or yarn or pnpm
```

## Basic Usage

### `platform-ts`

```typescript
import { PlatformReader } from "platform-ts";

const reader = new PlatformReader();

reader.getBrowser().name; // "Chrome"
reader.getBrowser().version; // "87.0.4280.88"
reader.getEngine().name; // "Blink"
```

## Documentation

### `platform-ts`

[https://platform-ts.siraj.page/docs](https://platform-ts.siraj.page/docs)

### `use-user-agent`

[https://platform-ts.siraj.page/use-user-agent](https://platform-ts.siraj.page/use-user-agent)
