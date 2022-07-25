import React from "react";
import classes from "./CharSettings.module.scss";
import { useActions } from "../../Hooks/useActions";
import { useTypedSelector } from "../../Hooks/useTypeSelector";

const ChartSettings = () => {
  const {
    setInitialValueByData,
    setInitialValueByLabels,
    addRow,
    addColumn,
    setLabelInData,
    removeRow,
    removeColumn,
  } = useActions();

  const { options } = useTypedSelector((state) => state.options);

  return (
    <div className={classes.chartSettings}>
      <p className={classes.miniTitle}>Таблица данных</p>
      <form
        className={classes.dataTable}
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <p className={classes.axis}>X</p>
          <input
            className={`${classes.inputData} ${classes.inputDataLabel}`}
            value="Заголовок"
            disabled
          />
          {options.data.labels.map((field, index) => (
            <div className={classes.flex}>
              <div
                className={classes.close}
                onClick={() => removeRow(index)}
              ></div>
              <input
                className={`${classes.inputData} ${classes.inputDataLabel}`}
                key={index}
                type="text"
                value={field}
                onChange={(event) =>
                  setInitialValueByLabels({
                    id: index,
                    value: event.target.value,
                  })
                }
              />
            </div>
          ))}
          <button
            className={classes.addButton}
            onClick={() => {
              addRow();
            }}
          >
            Добавить строку
          </button>
        </div>
        <div>
          <div className={classes.flex}>
            {options.data.datasets.map((item, indexDataset) => {
              return (
                <div className={classes.iclass} key={indexDataset}>
                  <p className={classes.axis}>Y{indexDataset + 1}</p>
                  <div
                    className={classes.closeY}
                    onClick={() => removeColumn(indexDataset)}
                  ></div>
                  <input
                    className={`${classes.inputData} ${classes.inputDataLabel}`}
                    key={indexDataset}
                    value={item.label}
                    onChange={(event) =>
                      setLabelInData({
                        id: indexDataset,
                        value: event.target.value,
                      })
                    }
                  />
                  {item.data.map((field, indexData) => (
                    <input
                      className={`${classes.inputData} ${classes.inputDataNumbers}`}
                      key={indexData}
                      type="text"
                      value={field}
                      onChange={(event) =>
                        setInitialValueByData({
                          idData: indexData,
                          value: event.target.value,
                          idDataset: indexDataset,
                        })
                      }
                    />
                  ))}
                </div>
              );
            })}
          </div>
          <button
            className={classes.addButton}
            onClick={() => {
              addColumn();
            }}
          >
            Добавить столбец
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChartSettings;
