import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { label } from '@/components/ui/label';
import { dashboard } from '@/routes';
import { useForm } from '@inertiajs/react';

export default function Dashboard() {
    const form = useForm({name: '', description: '', contactnumber: '', venue: '', date: '', time: ''});

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        form.post('/event',{
            onSuccess: () => form.reset(),
        });

    }
    
    
        return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div> 
                    <h1 className="text-xl font-semibold">Event</h1>
                    <p className="text-muted-foreground text-sm">
                        Add New Event 
                    </p>
                </div>
    
                <form onSubmit={submit} className="max-w-x1 space-y-4 rounded-lg border p-4">
                    <div className="space-y-2">
                    <label htmlFor="name">Name:</label>
                    <Input 
                            id="name"
                            value={form.data.name}
                            onChange={(event) => form.setData('name', event.target.value)}
                            />
                            {form.errors.name && <p className="text-sm text-red-600">{form.errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="description">Description:</label>

                    <Input
                            id="description"
                            value={form.data.description}
                            onChange={(event) => form.setData('description', event.target.value)}
                            />
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="contactnumber">Contact Number:</label>

                    <Input 
                            id="contactnumber"
                            value={form.data.contactnumber}
                            onChange={(event) => form.setData('contactnumber', event.target.value)}
                            />
                            {form.errors.contactnumber && <p className="text-sm text-red-600">{form.errors.contactnumber}</p>}
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="venue">Venue:</label>
                    <Input 
                            id="venue"
                            value={form.data.venue}
                            onChange={(event) => form.setData('venue', event.target.value)}
                            />
                            {form.errors.venue && <p className="text-sm text-red-600">{form.errors.venue}</p>}
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="date">Date:</label>
                    <Input 
                            id="date"
                            value={form.data.date}
                            onChange={(event) => form.setData('date', event.target.value)}
                            />
                            {form.errors.date && <p className="text-sm text-red-600">{form.errors.date}</p>}
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="time">Time:</label>
                    <Input 
                            id="time"
                            value={form.data.time}
                            onChange={(event) => form.setData('time', event.target.value)}
                            />
                            {form.errors.time && <p className="text-sm text-red-600">{form.errors.time}</p>}
                    </div>

                    <Button type="submit" disabled={form.processing}>
                        Save Event
                    </Button>
                </form>
                

            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
