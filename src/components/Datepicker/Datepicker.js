/* @flow */

import React, { PureComponent } from "react";
import { GregorianCalendar, PersianCalendar } from "./Calendars";
import "antd/dist/antd.css";

class Datepicker extends PureComponent {
  render() {
    const { ...rest } = this.props;

    return (
      <div className="c--datepicker">
        {this.props.isPersian ? (
          <PersianCalendar
            {...rest}
            disabledHourFrom={this.props.disabledHourFrom}
            disabledHourTo={this.props.disabledHourTo}
          />
        ) : (
          <GregorianCalendar
            disabledHourFrom={this.props.disabledHourFrom}
            disabledHourTo={this.props.disabledHourTo}
          />
        )}
      </div>
    );
  }
}

export default Datepicker;
