const handleCreateEntry = (e) => {};

const CreateEntryForm = (props) => {
    return (
        <form id="entryForm" onSubmit={(e) => handleCreateEntry(e, props.triggerReload)}>
            <input id="entryTitle" type="text" placeholder="Title" />
            <input id="entryContent" type="text" placeholder="Start writing..." />

            <input type="submit" />
        </form>
    );
};