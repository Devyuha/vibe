# Vibe

A CLI tool for you to add notes, store bookmarks, manage goals and todos, etc.

*Note :* The tool is still in development and not all the features are developed yet. You can find the list of features finished below.

## Feature List / Roadmap

- [x] **Notes**
	- [x] Add
	- [x] Delete by id
	- [x] Delete by date
	- [x] List all
	- [x] List by date
	- [x] List by current date
- [ ] **Clear**
	- [ ] Truncate all tables
	- [ ] Truncate tables related to particular module
- [ ] **Goals**
	- [ ] Create group
	- [ ] Add goal to group
	- [ ] Delete item from group
	- [ ] Delete group and its items
	- [ ] Mark items as completed from group
	- [ ] Mark group as completed
	- [ ] List all groups.
	- [ ] List all items from particular group with label or id.
- [ ] **Bookmarks**
	- [ ] Create group
	- [ ] Add links to group
	- [ ] Delete link from group
	- [ ] Delete group
	- [ ] List all groups and links
	- [ ] List all links from a particular group
- [ ] **Import & Export**
	- [ ] Export data as SQL.
	- [ ] Export data as JSON.
	- [ ] Export data as CSV.
	- [ ] Import data from SQL.
	- [ ] Import data from JSON.
	- [ ] Import data from CSV.

## Installation
```bash
> npm install -g @devyuha/vibe
```

## Usage

To add notes, run any of the commands below :

*Note :* You can add notes with or without quotes. But sometimes, special characters like `\`, `'` may be pre defined in terminal.

```bash
vibe "Feeline good today"
vibe I am feeling good today
```

#### To list notes :

To list all notes :

```bash
vibe list
```

To list today's notes :

```bash
vibe list -d today
```

To list notes by date :

```bash
vibe list -d YYYY-MM-DD
```

#### To delete notes :

To delete by note id :

```bash
vibe delete note_id
```

To delete notes by date :

```bash
vibe delete YYYY-MM-DD
```

---
## 🤝 Contributing

We welcome contributions! Whether it's a bug fix, feature, or improvement, you're welcome to open an issue or submit a pull request.

📚 Please read the [CONTRIBUTING.md](CONTRIBUTING.md) guide before you get started.
💬 Join the discussion or request features by opening [issues](https://github.com/your-username/vibe/issues).
⭐ If you like this project, consider starring it!

## License

This project is licensed under the [MIT License](https://opensource.org/license/MIT).

You are free to use, modify, and distribute it with proper attribution.