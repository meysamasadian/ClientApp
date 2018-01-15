import React from 'react';
import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types';
import AutoComplete from "material-ui/AutoComplete";
import MenuItem from "material-ui/MenuItem";

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class MyChips extends React.Component {
    static propTypes = {
        candidates: PropTypes.array,
        label:PropTypes.string,
        hint:PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            chipData: [
            ],
            value:null
        };
        this.styles = {
            chip: {
                margin: 4,
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
            },
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(chosenRequest, index) {
        let chip = this.renderChip(this.props.candidates.filter((candidate)=>{return candidate.text === chosenRequest.text ? candidate : null})[0]);
        let chips = this.state.chipData;
        chips.push(chip);
        this.setState(Object.assign(this.state, {chipData:chips,value:null}))
    }

    handleRequestDelete = (key) => {
        if (key === 3) {
            alert('Why would you want to delete React?! :)');
            return;
        }

        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState({chipData: this.chipData});
    };

    renderChip(data) {
        return (
            <Chip
                key={data.key}
                onRequestDelete={() => this.handleRequestDelete(data.key)}
                style={this.styles.chip}
                deleteIconStyle={{marginRight:'5px'}}
            >
                {data.text}
            </Chip>
        );
    }

    render() {
        const {
            label,
            hint,
            candidates
        } = this.props;
        const dataSource = candidates.map((candidate)=>{
            return {
                text:candidate.text,
                value:(<MenuItem
                    value={candidate.key}
                    primaryText={candidate.text}
                />)
            }});
        return (
            <div>
                <AutoComplete
                    floatingLabelText={label}
                    hintText={hint}
                    dataSource={dataSource}
                    openOnFocus={true}
                    onNewRequest={this.addItem}
                    searchText={this.state.value}
                />
                <div style={this.styles.wrapper}>
                    {this.state.chipData}
                </div>
            </div>
        );
    }
}