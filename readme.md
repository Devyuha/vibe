# Vibe

A CLI mood tracker and personal note keeper.

## Installation
```bash
> npm install -g @devyuha/vibe
```

## Usage

To add notes, run any of the commands below :

```bash
> vibe "Feeline good today"
> vibe I am feeling good today
```

#### To list notes :

To list all notes :

```bash
> vibe list
```

To list today's notes :

```bash
> vibe list -d today
```

To list notes by date :

```bash
> vibe list -d YYYY-MM-DD
```

#### To delete notes :

To delete by note id :

```bash
> vibe delete note_id
```

To delete notes by date :

```bash
> vibe delete YYYY-MM-DD
```

