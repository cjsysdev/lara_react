import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Hello() {
    return (
        <>
            <GuestLayout>
                <Head title="Hello" />
                <div class="p-2 max-w-sm mx-auto dark:bg-gray-800 rounded-xl flex">
                    <div class="shrink-0">
                        {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
                    </div>
                    <div>
                        <div class="text-xl font-medium text-white">Hello</div>
                        <p class="text-slate-500">You have a new message!</p>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
