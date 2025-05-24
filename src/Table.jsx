import styles from "./Table.module.css"

function Table({list}) {

    return(
         <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Area</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.area}</td>
                <td>{item.forecast}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    )
}

export default Table