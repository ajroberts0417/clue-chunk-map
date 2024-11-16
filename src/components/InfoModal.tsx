const InfoModal: React.FC = () => {
  return (
    <div id="info-modal">
      <h1>OSRS Chunk Map</h1>
      <p>
        This is a tool for viewing what clues are available within each map
        chunk of Old School RuneScape.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Click and move your mouse to pan.</li>
        <li>Use your mouse's scroll wheel to zoom in and out.</li>
        <li>Click on a chunk to show the clue data for that chunk.</li>
        <li>
          Click on the search icon in the top right to open the search modal.
          <ul>
            <li>
              You can search for clue steps by their clue text or by what items
              are required.
            </li>
            <li>
              You can search for STASH units by what items can be stored in
              them.
            </li>
          </ul>
        </li>
        <li>
          Turn on "Chunk locking/unlocking mode" then click a chunk to toggle
          whether it is locked or unlocked.
          <ul>
            <li>
              Use the "Lock/unlock all chunks" button to toggle the state of all
              chunks.
            </li>
            <li>Unlocked chunks will be saved locally.</li>
            <li>
              Press "Create shareable link" to create a link that you can share
              with others.
            </li>
            <li>
              Opening a shared link will NOT overwrite your local data UNLESS
              you start making changes.
            </li>
          </ul>
        </li>

        <li>
          Turn on "Data editing mode" via the sidebar to make corrections or
          additions. Edits are saved locally.
          <ul>
            <li>
              If you would like to submit a correction or addition to the data,
              use the "Export chunk-data.json" button and upload the file
              attached to a{' '}
              <a
                href="https://github.com/ConnorDY/clue-chunk-map/issues/new"
                target="_blank"
                rel="noreferrer"
              >
                new issue
              </a>
              .
            </li>
          </ul>
        </li>
      </ul>
      <h2>Contributing</h2>

      <p>
        The source code for this project can be found{' '}
        <a
          href="https://github.com/ConnorDY/clue-chunk-map"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        If you see a mistake or would like to request a feature, please{' '}
        <a
          href="https://github.com/ConnorDY/clue-chunk-map/issues/new"
          target="_blank"
          rel="noreferrer"
        >
          let us know
        </a>
        .
      </p>
    </div>
  );
};

export default InfoModal;
