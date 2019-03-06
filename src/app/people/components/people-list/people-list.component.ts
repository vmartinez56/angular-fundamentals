import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '@app/people/models/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent {
  @Input() people: Person[] = [];
  listFilter: string;
  @Output() filterItems: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<Person> = new EventEmitter();

  onFilterChange(filter: string): void {
    this.filterItems.emit(filter);
  }

  onDelete(person: Person): void {
    this.delete.emit(person);
  }
}
