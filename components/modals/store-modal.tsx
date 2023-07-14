'use client';

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
  name: z.string().min(1)
})

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TODO create store submission
    console.log(values);
  }

  return(
    <Modal
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      title="Create Store"
      description="Add a new sotere to manage products and categories!"
    >
      <div
        className="
          space-y-4
          py-2
        " 
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="E-Commerce" {...field}/>
                  </FormControl>
                  <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button 
                  variant="outline" 
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  )
}