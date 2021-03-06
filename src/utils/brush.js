import * as d3 from 'd3';
import _ from 'lodash';
import emit from './emit';

/**
 *
 * brush x
 *
 * @param {d3.Selection} svg
 * @param {[[number, number], [number, number]]} extent
 * @param {d3.ScaleBand | d3.ScalePoint | d3.ScaleTime} scale
 * @param {Array<KeyValue>} data
 * @param {function} brushing
 * @return {void}
 */
function brushX(svg, extent, scale, data, brushing) {
    const brushSelection = svg.select('.brush');
    let b = !brushSelection.empty()
        ? brushSelection
        : svg.append('g').attr('class', 'brush');

    const brush = d3.brushX();

    brush
        .extent(extent)
        .on('end', () => {
            if (_.isNull(d3.event.selection)) return;

            const [xLeft, xRight] = Array.prototype.map
                .call(d3.event.selection, el => el - extent[0][0]);

            if (_.isFunction(scale.invert)) {
                const dateTimeStart = scale.invert(xLeft),
                    dateTimeEnd = scale.invert(xRight);

                emit(this, 'range-updated', dateTimeStart, dateTimeEnd);
            }

            if (_.isFunction(scale.step) && !_.isFunction(scale.bandwidth)) {
                const bisecRight = d3.bisector(d => scale(d.key)).right;

                let iLeft = bisecRight(data, xLeft),
                    iRight = bisecRight(data, xRight);

                if (iRight > data.length - 1) iRight -= 1;


                if (data[iLeft] && data[iRight]) {
                    const dateTimeStart = data[iLeft].key,
                        dateTimeEnd = data[iRight].key;

                    emit(this, 'range-updated', dateTimeStart, dateTimeEnd);
                }
            }

            if (_.isFunction(scale.bandwidth)) {
                const bisecRight = d3.bisector((d, x) => scale(d.key) + scale.bandwidth() - x).right;

                let iLeft = bisecRight(data, xLeft),
                    iRight = bisecRight(data, xRight);

                if (iRight > data.length - 1) iRight -= 1;


                if (data[iLeft] && data[iRight]) {
                    const dateTimeStart = data[iLeft].key,
                        dateTimeEnd = data[iRight].key;

                    emit(this, 'range-updated', dateTimeStart, dateTimeEnd);
                }
            }

            brush.move(b, null);
        });

    if (_.isFunction(brushing)) {
        brush
            .on('brush', () => {
                if (_.isNull(d3.event.selection)) return;

                const [xLeft, xRight] = Array.prototype.map
                    .call(d3.event.selection, el => el - extent[0][0]);

                if (_.isFunction(scale.invert)) {
                    const dateTimeStart = scale.invert(xLeft),
                        dateTimeEnd = scale.invert(xRight);

                    brushing.bind(this)(dateTimeStart, dateTimeEnd);
                }


                if (_.isFunction(scale.step) && !_.isFunction(scale.bandwidth)) {
                    const bisecRight = d3.bisector(d => scale(d.key)).right;

                    let iLeft = bisecRight(data, xLeft),
                        iRight = bisecRight(data, xRight);

                    if (iRight > data.length - 1) iRight -= 1;


                    if (data[iLeft] && data[iRight]) {
                        const dateTimeStart = data[iLeft].key,
                            dateTimeEnd = data[iRight].key;

                        brushing.bind(this)(dateTimeStart, dateTimeEnd);
                    }
                }

                if (_.isFunction(scale.bandwidth)) {
                    const bisecRight = d3.bisector((d, x) => scale(d.key) + scale.bandwidth() - x).right;

                    let iLeft = bisecRight(data, xLeft),
                        iRight = bisecRight(data, xRight);

                    if (iRight > data.length - 1) iRight -= 1;

                    if (data[iLeft] && data[iRight]) {
                        const dateTimeStart = data[iLeft].key,
                            dateTimeEnd = data[iRight].key;

                        brushing.bind(this)(dateTimeStart, dateTimeEnd);
                    }
                }
            });
    }


    b.call(brush);
}

/**
 *
 * brush y
 *
 * @param {d3.Selection} svg
 * @param {[[number, number], [number, number]]} extent
 * @param {d3.ScaleBand | d3.ScalePoint | d3.ScaleTime} scale
 * @param {Array<KeyValue>} data
 * @param {function} brushing
 * @return {void}
 */
function brushY(svg, extent, scale, data, brushing) {
    const brushSelection = svg.select('.brush');
    let b = !brushSelection.empty()
        ? brushSelection
        : svg.append('g').attr('class', 'brush');

    const brush = d3.brushY();

    brush
        .extent(extent)
        .on('end', () => {
            if (_.isNull(d3.event.selection)) return;

            const [yTop, yBottom] = Array.prototype.map
                .call(d3.event.selection, el => el - extent[0][1]);

            if (_.isFunction(scale.invert)) {
                const dateTimeStart = scale.invert(yTop),
                    dateTimeEnd = scale.invert(yBottom);

                emit(this, 'range-updated', dateTimeStart, dateTimeEnd);
            }

            if (_.isFunction(scale.step) && !_.isFunction(scale.bandwidth)) {
                const bisecRight = d3.bisector(d => scale(d.key)).right;

                let iTop = bisecRight(data, yTop),
                    iBottom = bisecRight(data, yBottom);

                if (iBottom > data.length - 1) iBottom -= 1;

                if (data[iTop] && data[iBottom]) {
                    const dateTimeStart = data[iTop].key,
                        dateTimeEnd = data[iBottom].key;

                    emit(this, 'range-updated', dateTimeStart, dateTimeEnd);
                }
            }

            if (_.isFunction(scale.bandwidth)) {
                const bisecRight = d3.bisector((d, x) => scale(d.key) + scale.bandwidth() - x).right;

                let iTop = bisecRight(data, yTop),
                    iBottom = bisecRight(data, yBottom);

                if (iBottom > data.length - 1) iBottom -= 1;

                if (data[iTop] && data[iBottom]) {
                    const dateTimeStart = data[iTop].key,
                        dateTimeEnd = data[iBottom].key;

                    emit(this, 'range-updated', dateTimeStart, dateTimeEnd);
                }
            }

            brush.move(b, null);
        });


        if (_.isFunction(brushing)) {
            brush
                .on('brush', () => {
                    if (_.isNull(d3.event.selection)) return;

                    const [yTop, yBottom] = Array.prototype.map
                        .call(d3.event.selection, el => el - extent[0][0]);

                    if (_.isFunction(scale.invert)) {
                        const dateTimeStart = scale.invert(yTop),
                            dateTimeEnd = scale.invert(yBottom);

                        brushing.bind(this)(dateTimeStart, dateTimeEnd);
                    }

                    if (_.isFunction(scale.step) && !_.isFunction(scale.bandwidth)) {
                        const bisecRight = d3.bisector(d => scale(d.key)).right;

                        let iTop = bisecRight(data, yTop),
                            iBottom = bisecRight(data, yBottom);

                        if (iBottom > data.length - 1) iBottom -= 1;

                        if (data[iTop] && data[iBottom]) {
                            const dateTimeStart = data[iTop].key,
                                dateTimeEnd = data[iBottom].key;

                            brushing.bind(this)(dateTimeStart, dateTimeEnd);
                        }
                    }

                    if (_.isFunction(scale.bandwidth)) {
                        const bisecRight = d3.bisector((d, x) => scale(d.key) + scale.bandwidth() - x).right;

                        let iTop = bisecRight(data, yTop),
                            iBottom = bisecRight(data, yBottom);

                        if (iBottom > data.length - 1) iBottom -= 1;

                        if (data[iTop] && data[iBottom]) {
                            const dateTimeStart = data[iTop].key,
                                dateTimeEnd = data[iBottom].key;

                            brushing.bind(this)(dateTimeStart, dateTimeEnd);
                        }
                    }
                });
        }

        b.call(brush);
}

export {
    brushX,
    brushY
};
