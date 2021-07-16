import React from 'react';

import { ItemIcon } from '.';
import type { StashUnit } from '../models';

import bushStashIcon from '../images/icons/STASH_unit_(bush).png';
import crateStashIcon from '../images/icons/STASH_unit_(crate).png';
import holeStashIcon from '../images/icons/STASH_unit_(hole).png';
import rockStashIcon from '../images/icons/STASH_unit_(rock).png';

const StashUnitTable: React.FC<{ units?: StashUnit[] }> = ({ units }) => {
  if (!units || !units.length) {
    return <></>;
  }

  const stashIcons: { [x: string]: string } = {
    Bush: bushStashIcon,
    Crate: crateStashIcon,
    Hole: holeStashIcon,
    Rock: rockStashIcon,
  };

  return (
    <div className="stash-unit-table">
      <h2>STASH Units</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Appearance</th>
            <th>Location</th>
            <th>Items</th>
            <th>Chunk(s)</th>
          </tr>
        </thead>

        <tbody>
          {units.map(
            ({ difficulty, type, location, items, chunk, alternateChunks }) => (
              <tr key={location}>
                <td>{difficulty}</td>
                <td>
                  <div className="stash-unit-type">
                    <img
                      className="stash-unit-icon"
                      src={stashIcons[type]}
                      aria-hidden
                    />
                    <div>{type}</div>
                  </div>
                </td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: location.replaceAll('\n', '<br />'),
                  }}
                />
                <td>
                  {items.map((item, index) => (
                    <ItemIcon item={item} key={index} />
                  ))}
                </td>
                <td className="chunk-coords">
                  ({chunk?.x}, {chunk?.y})
                  {alternateChunks &&
                    alternateChunks.map(({ x, y }) => (
                      <React.Fragment key={`alt-${x}-${y}`}>
                        <span className="comma">,</span> ({x}, {y})
                      </React.Fragment>
                    ))}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StashUnitTable;